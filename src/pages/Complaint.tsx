import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageContainer from "@/components/PageContainer";
import { toast } from "sonner";

const formSchema = z.object({
  type: z.string({
    required_error: "Please select a complaint type.",
  }),
  others: z.string().optional(),
  location: z.string().min(5, {
    message: "Location must be at least 5 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  contact: z.string().optional(),
});

const Complaint = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      description: "",
      contact: "",
      others: "",
    },
  });

  const selectedType = form.watch("type");

  function onSubmit(values: z.infer<typeof formSchema>) {
    const finalType = values.type === "Others" ? `Others: ${values.others}` : values.type;
    const subject = encodeURIComponent(`BFP Report: ${finalType}`);
    const body = encodeURIComponent(
      `Type: ${finalType}\nLocation: ${values.location}\nDate: ${new Date().toLocaleString()}\n\nDetails:\n${values.description}\n\nContact Info: ${values.contact || "N/A"}`
    );

    // Open default email client
    window.location.href = `mailto:bfp.taguig@gmail.com?subject=${subject}&body=${body}`;

    toast.success("Opening email client...", {
      description: "Please attach photos if you have them, then press Send.",
    });
  }

  return (
    <PageContainer title="Report Hazard" showBack>
      <div className="px-4 py-6 space-y-6">
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-sm text-orange-800">
          <p className="font-semibold">⚠️ Emergency?</p>
          <p>If there is an active fire or immediate danger, do not use this form. Call the hotline immediately.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nature of Report</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select type of hazard" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Visible Smoke / Verification">Visible Smoke / Verification</SelectItem>
                      <SelectItem value="Fire">Fire</SelectItem>
                      <SelectItem value="Rubbish Fire">Rubbish Fire</SelectItem>
                      <SelectItem value="Vehicular Accident">Vehicular Accident</SelectItem>
                      <SelectItem value="Chemical Leak">Chemical Leak</SelectItem>
                      <SelectItem value="Oil Spill">Oil Spill</SelectItem>
                      <SelectItem value="Rescue Operation">Rescue Operation</SelectItem>
                      <SelectItem value="Animal Rescue">Animal Rescue</SelectItem>
                      <SelectItem value="Retrieval Operations">Retrieval Operations</SelectItem>
                      <SelectItem value="Suicidal Attempt">Suicidal Attempt</SelectItem>
                      <SelectItem value="Medical Assistance">Medical Assistance</SelectItem>
                      <SelectItem value="Medical Transport">Medical Transport</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {selectedType === "Others" && (
              <FormField
                control={form.control}
                name="others"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Please specify</FormLabel>
                    <FormControl>
                      <Input placeholder="Specify your concern" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location / Landmark</FormLabel>
                  <FormControl>
                    <Input placeholder="Complete address or nearest landmark" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the hazard. What exactly is wrong?"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name / # (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="So we can contact you for clarifications" {...field} />
                  </FormControl>
                  <FormDescription>
                    We respect your privacy.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full hero-gradient text-white font-semibold">
              <Send className="w-4 h-4 mr-2" />
              Compose Report
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Clicking submit will open your email app. You can attach photos there.
            </p>
          </form>
        </Form>
      </div>
    </PageContainer>
  );
};

export default Complaint;
