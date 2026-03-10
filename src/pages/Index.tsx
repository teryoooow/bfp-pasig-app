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
  Megaphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageContainer from "@/components/PageContainer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import bfpLogo from "@/assets/bfp-pasig-logo.jpg";
import heroBg from "@/assets/hero-bg.png";

const Index = () => {
  const handleEmergencyCall = () => {
    window.location.href = "tel:8641-2815";
  };

  return (
    <PageContainer title="BFP Pasig">
      {/* Hero Section */}
      <div
        className="relative px-4 py-8 -mt-px overflow-hidden"
      >
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-950/70 to-background"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="h-24 w-24 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center mb-4 animate-fade-in shadow-xl ring-4 ring-white/10">
            <img src={bfpLogo} alt="BFP Pasig Logo" className="h-full w-full object-cover rounded-full" />
          </div>
          <h2 className="font-display text-2xl font-bold text-white mb-2 animate-fade-in text-shadow-sm" style={{ animationDelay: "0.1s" }}>
            Bureau of Fire Protection
          </h2>
          <p className="text-white/90 text-sm mb-6 animate-fade-in font-medium" style={{ animationDelay: "0.2s" }}>
            Pasig City Fire Station
          </p>
          <div className="flex gap-3 w-full max-w-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              variant="emergency"
              size="xl"
              onClick={handleEmergencyCall}
              className="flex-1 active:scale-95 transition-transform shadow-lg border-white/10 px-2"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-sm font-bold uppercase leading-tight text-left">
                Emergency<br />Hotline
              </span>
            </Button>

            <Button
              variant="emergency"
              size="xl"
              onClick={() => window.location.href = "tel:911"}
              className="flex-1 active:scale-95 transition-transform shadow-lg border-white/10 px-2"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-sm font-bold uppercase">CALL 911</span>
            </Button>
          </div>
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

      {/* E-Reklamo Section */}
      <div className="px-4 py-2">
        <Link to="/e-reklamo" className="block w-full group active:scale-95 transition-transform">
          <div className="border-[3px] border-dotted border-[#FFC107] rounded-xl p-4 relative bg-[#0b162a] shadow-sm group-hover:bg-[#15294a] transition-colors">
            <div className="flex flex-col items-center justify-center leading-none py-2">
              <h1 className="text-3xl font-black text-transparent tracking-widest font-display pb-1" style={{ WebkitTextStroke: "1px #FFC107" }}>
                E-REKLAMO
              </h1>
              <h1 className="text-3xl font-black text-[#FFC107] tracking-widest font-display -mt-2">
                E-REKLAMO
              </h1>
            </div>
          </div>
        </Link>
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
          description="All fire stations in Pasig"
          path="/contacts"
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
          path="https://www.facebook.com/profile.php?id=61566565531177"
        />
      </div>
    </PageContainer >
  );
};

export default Index;
