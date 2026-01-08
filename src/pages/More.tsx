import { Target, BookHeart, Info, ExternalLink } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import ServiceCard from "@/components/ServiceCard";

const More = () => {
  return (
    <PageContainer title="More">
      <div className="px-4 py-6 space-y-6">
        <div className="space-y-3">
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
        </div>

        {/* About Section */}
        <div className="bg-card rounded-xl p-6 card-elevated">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Info className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground">About This App</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            This mobile application is developed for the Bureau of Fire Protection - Taguig City to provide citizens easy access to fire safety information, services, and emergency contacts.
          </p>
          <div className="text-xs text-muted-foreground">
            <p>Version 1.0.0</p>
            <p>© 2024 BFP Taguig City</p>
          </div>
        </div>

        {/* External Links */}
        <div className="bg-card rounded-xl p-4 card-elevated">
          <h3 className="font-display font-semibold text-foreground mb-4">Useful Links</h3>
          <div className="space-y-3">
            <a
              href="https://bfp.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
            >
              <span className="text-sm font-medium text-foreground">BFP Official Website</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </a>
            <a
              href="https://tfrm.bfp.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
            >
              <span className="text-sm font-medium text-foreground">Fire Incident Reporting</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default More;
