import PageContainer from "@/components/PageContainer";
import OfficerCard from "@/components/OfficerCard";
import { getOfficerImage } from "@/lib/officerImages";

const officers = [
  {
    name: "FSUPT REYNALDO D ENOC",
    position: "City Fire Marshal",
    rank: "Fire Superintendent",
  },
  {
    name: "FCINSP LEO JOSHUA S DANGATAN",
    position: "Deputy City Fire Marshal",
    rank: "Fire Chief Inspector",
  },
  {
    name: "FSINSP RALPH VINCENT A DEINLA",
    position: "Chief, Administrative Section",
    rank: "Fire Senior Inspector",
  },
  {
    name: "FSINSP TROY NATHANIEL I LORO",
    position: "Chief, Operations Section",
    rank: "Fire Senior Inspector",
  },
  {
    name: "FSINSP EDERINO JOHN B REYES",
    position: "Chief, Fire Safety Enforcement Section",
    rank: "Fire Senior Inspector",
  },
  {
    name: "FSINSP NEIL M BRANANOLA",
    position: "Chief, Logistics Section",
    rank: "Fire Senior Inspector",
  },
  {
    name: "FINSP GEORGE V MACATIAG",
    position: "Chief, Plans Evaluation Unit",
    rank: "Fire Inspector",
  },
];

const Officers = () => {
  return (
    <PageContainer title="Key Officers" showBack={true}>
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
              <OfficerCard
                {...officer}
                image={getOfficerImage(officer.name)}
              />
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Officers;
