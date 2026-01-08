import PageContainer from "@/components/PageContainer";
import OfficerCard from "@/components/OfficerCard";

const officers = [
  {
    name: "SFIRE JUAN DELA CRUZ",
    position: "City Fire Marshal",
    rank: "Senior Fire Officer IV",
  },
  {
    name: "FINSP MARIA SANTOS",
    position: "Assistant City Fire Marshal",
    rank: "Fire Inspector",
  },
  {
    name: "SFO3 PEDRO REYES",
    position: "Operations Chief",
    rank: "Senior Fire Officer III",
  },
  {
    name: "SFO2 ANA GARCIA",
    position: "Administrative Officer",
    rank: "Senior Fire Officer II",
  },
  {
    name: "SFO1 JOSE MARTINEZ",
    position: "Training Officer",
    rank: "Senior Fire Officer I",
  },
  {
    name: "FO3 CARMEN LIM",
    position: "Investigation Officer",
    rank: "Fire Officer III",
  },
];

const Officers = () => {
  return (
    <PageContainer title="Key Officers">
      <div className="px-4 py-6">
        <p className="text-muted-foreground text-sm mb-6">
          Meet the dedicated leaders of BFP Taguig City Fire Station committed to protecting our community.
        </p>
        
        <div className="space-y-3">
          {officers.map((officer, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <OfficerCard {...officer} />
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Officers;
