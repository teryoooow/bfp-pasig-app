import { Target, Eye } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import missionBg from "@/assets/mission-bg.jpeg";
import visionBg from "@/assets/vision-bg.jpg";
import coreValuesBg from "@/assets/core-values-bg.png";

const VisionMission = () => {
  return (
    <PageContainer title="Vision & Mission" showBack={true}>
      <div className="px-4 py-6 space-y-6">
        {/* Vision */}
        {/* Vision */}
        <div className="relative overflow-hidden rounded-xl p-6 card-elevated animate-fade-in group">
          <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
            <img src={visionBg} alt="Vision Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="font-display text-xl font-bold text-white tracking-wide text-shadow-sm">Vision</h2>
            </div>
            <p className="text-white/90 leading-relaxed font-medium text-shadow-sm">
              A modern fire service fully capable of ensuring a fire-safe nation by 2034.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="relative overflow-hidden rounded-xl p-6 card-elevated animate-fade-in group" style={{ animationDelay: "0.1s" }}>
          <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
            <img src={missionBg} alt="Mission Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="font-display text-xl font-bold text-white tracking-wide text-shadow-sm">Mission</h2>
            </div>
            <p className="text-white/90 leading-relaxed font-medium text-shadow-sm">
              The BFP shall be responsible in the prevention and suppression of all destructive fires, investigate its causes, provide Emergency Medical and Rescue Services, enforce the Fire Code of the Philippines, and perform other related activities to protect lives, properties, and the environment.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="relative overflow-hidden rounded-xl p-6 card-elevated animate-fade-in group" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
            <img src={coreValuesBg} alt="Core Values Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-yellow-950/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-xl font-bold text-white mb-4 text-shadow-sm">Core Values</h2>
            <div className="space-y-3">
              {[
                { letter: "I", value: "Integrity" },
                { letter: "S", value: "Service Excellence" },
                { letter: "A", value: "Accountability" },
                { letter: "F", value: "Fortitude" },
                { letter: "E", value: "Efficiency" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-sm">
                    <span className="text-white font-display font-bold">{item.letter}</span>
                  </div>
                  <span className="text-white/90 font-medium text-shadow-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default VisionMission;
