import { CheckCircle2, Clock, FileText } from "lucide-react";
import PageContainer from "@/components/PageContainer";

const services = [
  {
    title: "Fire Safety Evaluation Clearance (FSEC)",
    description: "Required for new building construction, renovation, and occupancy permit applications.",
  },
  {
    title: "Fire Safety Inspection Certificate (FSIC)",
    description: "Required for annual business permit renewal and certificate of occupancy.",
  },
  {
    title: "Fire Incident Investigation",
    description: "Investigation and documentation of fire incidents for insurance and legal purposes.",
  },
  {
    title: "Fire Safety Training & Seminars",
    description: "Fire prevention awareness, basic firefighting, and emergency response training.",
  },
  {
    title: "Fire Drill Assistance",
    description: "Supervision and assistance in conducting fire drills for establishments.",
  },
  {
    title: "Emergency Medical Services",
    description: "First response medical assistance and transport to nearest hospital.",
  },
  {
    title: "Search and Rescue Operations",
    description: "Emergency rescue services for various incidents and disasters.",
  },
];

const Services = () => {
  return (
    <PageContainer title="Frontline Services">
      <div className="px-4 py-6">
        <p className="text-muted-foreground text-sm mb-6">
          The Bureau of Fire Protection provides the following services to ensure fire safety in our community.
        </p>
        
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-4 card-elevated animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Services;
