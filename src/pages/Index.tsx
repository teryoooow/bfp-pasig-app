import {
  Users,
  Target,
  BookHeart,
  ClipboardList,
  FileCheck,
  Building2,
  Ambulance,
  Phone,
  TriangleAlert,
  BookOpen,
  Facebook,
} from "lucide-react";
import PageContainer from "@/components/PageContainer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import bfpLogo from "@/assets/bfp-taguig-logo.jpg";

const Index = () => {
  const handleEmergencyCall = () => {
    window.location.href = "tel:+63 906 211 0919";
  };

  return (
    <PageContainer title="BFP Taguig">
      {/* Hero Section */}
      <div className="hero-gradient px-4 py-8 -mt-px">
        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mb-4 animate-fade-in shadow-xl ring-4 ring-white/10">
            <img src={bfpLogo} alt="BFP Taguig Logo" className="h-full w-full object-cover rounded-full" />
          </div>
          <h2 className="font-display text-2xl font-bold text-primary-foreground mb-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Bureau of Fire Protection
          </h2>
          <p className="text-primary-foreground/80 text-sm mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Taguig City Fire Station
          </p>
          <Button
            variant="emergency"
            size="xl"
            onClick={handleEmergencyCall}
            className="animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Phone className="h-5 w-5" />
            Emergency Hotline
          </Button>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-4 py-2 space-y-3">
        <h3 className="font-display font-semibold text-foreground text-lg mb-4">
          Services & Applications
        </h3>

        <ServiceCard
          icon={ClipboardList}
          title="Frontline Services"
          description="Available services for citizens"
          path="/services"
          variant="primary"
        />

        <ServiceCard
          icon={FileCheck}
          title="FSEC / FSIC Application"
          description="Step-by-step application guide"
          path="/application-guide"
          variant="secondary"
        />
      </div>

      {/* Quick Services */}
      <div className="px-4 py-6 space-y-3">
        <h3 className="font-display font-semibold text-foreground text-lg mb-4">
          Quick Access
        </h3>

        <ServiceCard
          icon={Users}
          title="Key Officers"
          description="Meet our fire department leaders"
          path="/officers"
        />

        <ServiceCard
          icon={Target}
          title="Vision & Mission"
          description="Our goals and commitments"
          path="/vision-mission"
        />

        <ServiceCard
          icon={BookHeart}
          title="Fireman's Prayer"
          description="The firefighter's sacred oath"
          path="/prayer"
        />

        <ServiceCard
          icon={TriangleAlert}
          title="Report Hazard"
          description="Report fire hazards & violations"
          path="/complaint"
          variant="secondary"
        />

        <ServiceCard
          icon={BookOpen}
          title="Safety Guide"
          description="Offline preparedness manuals"
          path="/education"
        />
      </div>

      {/* Contacts Section */}
      <div className="px-4 py-6 space-y-3">
        <h3 className="font-display font-semibold text-foreground text-lg mb-4">
          Contact Information
        </h3>

        <ServiceCard
          icon={Building2}
          title="Substations"
          description="All fire stations in Taguig"
          path="/substations"
        />

        <ServiceCard
          icon={Ambulance}
          title="EMS & SRF"
          description="Emergency Medical & Rescue contacts"
          path="/ems-srf"
        />
        <ServiceCard
          icon={Facebook}
          title="Official Facebook Page"
          description="Follow us for updates & news"
          path="https://www.facebook.com/TaguigCityFireStation"
        />
      </div>
    </PageContainer>
  );
};

export default Index;
