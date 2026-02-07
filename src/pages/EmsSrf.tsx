import { Ambulance, LifeBuoy, Phone } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";

const emsContacts = [
  {
    name: "BFP Emergency Medical Services",
    phone: "911",
  }
];

const srfContacts = [
  {
    name: "Special Rescue Force Hotline",
    phone: "(02) 8838-8901",
  }
];

const EmsSrf = () => {
  const handleEmergencyCall = () => {
    window.location.href = "tel:911";
  };

  return (
    <PageContainer title="EMS & SRF" showBack={true}>
      <div className="px-4 py-6 space-y-6">
        {/* Emergency Banner */}
        <div className="emergency-gradient rounded-xl p-6 text-center animate-fade-in">
          <h2 className="font-display text-xl font-bold text-primary-foreground mb-2">
            In Case of Emergency
          </h2>
          <p className="text-primary-foreground/80 text-sm mb-4">
            For fire, medical, or rescue emergencies
          </p>
          <Button
            variant="hero"
            size="xl"
            onClick={handleEmergencyCall}
            className="bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground/40"
          >
            <Phone className="h-5 w-5" />
            Call 911
          </Button>
        </div>

        {/* EMS Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Ambulance className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground">
              Emergency Medical Services
            </h3>
          </div>
          <div className="space-y-3">
            {emsContacts.map((contact, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ContactCard
                  name={contact.name}
                  phone={contact.phone}
                  type="emergency"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SRF Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <LifeBuoy className="h-5 w-5 text-secondary" />
            </div>
            <h3 className="font-display font-semibold text-foreground">
              Special Rescue Force
            </h3>
          </div>
          <div className="space-y-3">
            {srfContacts.map((contact, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${(emsContacts.length + index) * 0.05}s` }}
              >
                <ContactCard
                  name={contact.name}
                  phone={contact.phone}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="bg-muted rounded-xl p-4 text-center">
          <p className="text-sm text-muted-foreground">
            All emergency services are available 24/7.
            <br />
            For non-emergency inquiries, please visit the main station.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default EmsSrf;
