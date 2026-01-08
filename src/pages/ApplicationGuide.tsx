import { FileCheck, AlertCircle } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import StepCard from "@/components/StepCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fsecSteps = [
  {
    title: "Secure Application Form",
    description: "Obtain the FSEC application form from the BFP office or download from the official website.",
  },
  {
    title: "Prepare Requirements",
    description: "Gather all required documents including building plans, fire safety plans, and vicinity map.",
  },
  {
    title: "Submit Application",
    description: "Submit the completed application form with all requirements to the BFP office.",
  },
  {
    title: "Pay Assessment Fee",
    description: "Pay the corresponding assessment fee based on the building's floor area and occupancy.",
  },
  {
    title: "Await Inspection",
    description: "A Fire Safety Inspector will conduct an ocular inspection of the building plans.",
  },
  {
    title: "Claim FSEC",
    description: "Once approved, claim your Fire Safety Evaluation Clearance from the BFP office.",
  },
];

const fsicSteps = [
  {
    title: "Secure Application Form",
    description: "Obtain the FSIC application form from the BFP office or request during inspection.",
  },
  {
    title: "Prepare Requirements",
    description: "Prepare business permit, fire extinguisher certification, and previous FSIC (if renewal).",
  },
  {
    title: "Submit Application",
    description: "Submit the completed form with all requirements to the BFP office in your barangay.",
  },
  {
    title: "Schedule Inspection",
    description: "A Fire Safety Inspector will be assigned to inspect your establishment.",
  },
  {
    title: "Undergo Inspection",
    description: "Ensure all fire safety equipment and exits are in compliance during the inspection.",
  },
  {
    title: "Pay & Claim FSIC",
    description: "Pay the inspection fee and claim your Fire Safety Inspection Certificate.",
  },
];

const fsecRequirements = [
  "Duly accomplished application form",
  "Photocopy of approved building permit",
  "Five (5) sets of building plans signed by licensed architect/engineer",
  "Fire safety plan and specifications",
  "Vicinity map / location plan",
  "Structural design (if applicable)",
  "Electrical plans signed by licensed electrical engineer",
];

const fsicRequirements = [
  "Duly accomplished application form",
  "Photocopy of previous year's business permit",
  "Previous FSIC (for renewal)",
  "Certificate of fire extinguisher inspection",
  "Updated fire safety plan",
  "List of fire safety equipment with maintenance records",
  "Building occupancy certificate",
];

const ApplicationGuide = () => {
  return (
    <PageContainer title="Application Guide">
      <div className="px-4 py-6">
        <Tabs defaultValue="fsec" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="fsec" className="font-semibold">FSEC</TabsTrigger>
            <TabsTrigger value="fsic" className="font-semibold">FSIC</TabsTrigger>
          </TabsList>

          <TabsContent value="fsec" className="space-y-6">
            <div className="bg-card rounded-xl p-4 card-elevated">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="h-6 w-6 text-primary" />
                <h2 className="font-display font-bold text-foreground">
                  Fire Safety Evaluation Clearance
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Required for building construction, renovation, and occupancy permits.
              </p>
            </div>

            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                Step-by-Step Process
              </h3>
              {fsecSteps.map((step, index) => (
                <StepCard
                  key={index}
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>

            <div className="bg-card rounded-xl p-4 card-elevated">
              <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" />
                Requirements
              </h3>
              <ul className="space-y-2">
                {fsecRequirements.map((req, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="fsic" className="space-y-6">
            <div className="bg-card rounded-xl p-4 card-elevated">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="h-6 w-6 text-primary" />
                <h2 className="font-display font-bold text-foreground">
                  Fire Safety Inspection Certificate
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Required for business permit renewal and certificate of occupancy.
              </p>
            </div>

            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                Step-by-Step Process
              </h3>
              {fsicSteps.map((step, index) => (
                <StepCard
                  key={index}
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>

            <div className="bg-card rounded-xl p-4 card-elevated">
              <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" />
                Requirements
              </h3>
              <ul className="space-y-2">
                {fsicRequirements.map((req, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
};

export default ApplicationGuide;
