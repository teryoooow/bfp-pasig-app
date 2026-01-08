import { Target, Eye } from "lucide-react";
import PageContainer from "@/components/PageContainer";

const VisionMission = () => {
  return (
    <PageContainer title="Vision & Mission">
      <div className="px-4 py-6 space-y-6">
        {/* Vision */}
        <div className="bg-card rounded-xl p-6 card-elevated animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl hero-gradient flex items-center justify-center">
              <Eye className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">Vision</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A modern fire service fully capable of ensuring a fire-safe nation by 2034.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-card rounded-xl p-6 card-elevated animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl navy-gradient flex items-center justify-center">
              <Target className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">Mission</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The BFP shall be responsible in the prevention and suppression of all destructive fires, investigate its causes, provide Emergency Medical and Rescue Services, enforce the Fire Code of the Philippines, and perform other related activities to protect lives, properties, and the environment.
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-card rounded-xl p-6 card-elevated animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Core Values</h2>
          <div className="space-y-3">
            {[
              { letter: "I", value: "Integrity" },
              { letter: "S", value: "Service Excellence" },
              { letter: "A", value: "Accountability" },
              { letter: "F", value: "Fortitude" },
              { letter: "E", value: "Efficiency" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-display font-bold">{item.letter}</span>
                </div>
                <span className="text-foreground font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default VisionMission;
