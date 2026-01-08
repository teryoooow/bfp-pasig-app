import { CheckCircle2, Clock, FileText } from "lucide-react";
import PageContainer from "@/components/PageContainer";

const services = [
  {
    title: "Fire Safety Evaluation Clearance (FSEC)",
    description: "Required for new building construction, renovation, and occupancy permit applications.",
    processingTime: "3-5 working days",
  },
  {
    title: "Fire Safety Inspection Certificate (FSIC)",
    description: "Required for annual business permit renewal and certificate of occupancy.",
    processingTime: "3-5 working days",
  },
  {
    title: "Fire Incident Investigation",
    description: "Investigation and documentation of fire incidents for insurance and legal purposes.",
    processingTime: "Varies",
  },
  {
    title: "Fire Safety Training & Seminars",
    description: "Fire prevention awareness, basic firefighting, and emergency response training.",
    processingTime: "By schedule",
  },
  {
    title: "Fire Drill Assistance",
    description: "Supervision and assistance in conducting fire drills for establishments.",
    processingTime: "By schedule",
  },
  {
    title: "Emergency Medical Services",
    description: "First response medical assistance and transport to nearest hospital.",
    processingTime: "Immediate",
  },
  {
    title: "Search and Rescue Operations",
    description: "Emergency rescue services for various incidents and disasters.",
    processingTime: "Immediate",
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
                  <p className="text-sm text-muted-foreground mb-2">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-primary">
                    <Clock className="h-3 w-3" />
                    <span>{service.processingTime}</span>
                  </div>
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
