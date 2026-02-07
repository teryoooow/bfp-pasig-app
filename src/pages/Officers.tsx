import PageContainer from "@/components/PageContainer";
import OfficerCard from "@/components/OfficerCard";
import { getOfficerImage } from "@/lib/officerImages";

const officers = [
  {
    name: "FSUPT GARYNEL Z JULIAN",
    position: "City Fire Marshal",
    rank: "Fire Superintendent",
  },
  {
    name: "FCINSP ALBERTO B EDRADA",
    position: "Deputy City Fire Marshal | Concurrent Station Commander, Taguig Central Fire Station",
    rank: "Fire Chief Inspector",
  },
  {
    name: "FSINSP LOUNEL Z LOPEZ",
    position: "Chief, Operations Section",
    rank: "Fire Senior Inspector",
  },
  {
    name: "FSINSP EDERINO JOHN B REYES",
    position: "Chief, Fire Prevention Section",
    rank: "Fire Senior Inspector",
  },
  {
    name: "FSINSP JAME RUFF A KINEY",
    position: "Chief, Administrative Section",
    rank: "Fire Senior Inspector",
  },
  {
    name: "FINSP MAYE S MADELAR",
    position: "Chief, Personnel and Training Unit",
    rank: "Fire Inspector",
  },
  {
    name: "FINSP DANIEL DC TUICO",
    position: "Station Commander, Central Signal Fire Station",
    rank: "Fire Inspector",
  },
  {
    name: "FINSP JUPITER ROY B PALAGANAS",
    position: "Station Commander, Bagumbayan Fire Station",
    rank: "Fire Inspector",
  },
  {
    name: "FSINSP FERNANDO R ZAGALA",
    position: "Station Commander, Comembo Fire Station",
    rank: "Fire Senior Inspector",
  },
  {
    name: "SFO4 Marlo L Sarto",
    position: "Acting Chief, Emergency Medical Services",
    rank: "Senior Fire Officer IV",
  },
  {
    name: "SFO4 Ana Joy P Parungao",
    position: "Acting Chief, Investigation and Intelligence Unit",
    rank: "Senior Fire Officer IV",
  },
  {
    name: "SFO4 Eric M Solis",
    position: "Chief, Plans Evaluation Unit",
    rank: "Senior Fire Officer IV",
  },
  {
    name: "SFO4 Novissa T Renomeron",
    position: "Acting Chief, Finance Unit",
    rank: "Senior Fire Officer IV",
  },
  {
    name: "SFO4 Florante P Aquino",
    position: "Acting Station Commander, Palingon Fire Station",
    rank: "Senior Fire Officer IV",
  },
  {
    name: "SFO4 Arnold D Baloloy",
    position: "Acting Station Commander, Cuasay Fire Station",
    rank: "Senior Fire Officer IV",
  },
  {
    name: "SFO4 Mc Khenny L Malupeng",
    position: "Acting Station Commander, Maharlika Fire Station",
    rank: "Senior Fire Officer IV",
  },
  {
    name: "SFO3 Matthew Miles A Duran",
    position: "Chief, COMMEL",
    rank: "Senior Fire Officer III",
  },
  {
    name: "SFO3 Nora R Intano",
    position: "Acting Chief, Records and Leave Management Unit",
    rank: "Senior Fire Officer III",
  },
  {
    name: "SFO3 Rizalino L Lucero",
    position: "Acting Station Commander, North Signal Fire Station",
    rank: "Senior Fire Officer III",
  },
  {
    name: "SFO3 Ryan C Macalalad",
    position: "Acting Station Commander, Wawa Fire Station",
    rank: "Senior Fire Officer III",
  },
  {
    name: "SFO3 Reward L Abucay",
    position: "Acting Station Commander, West Rembo Fire Station",
    rank: "Senior Fire Officer III",
  },
  {
    name: "SFO2 Sancel Desiree C Panganiban",
    position: "Acting Chief, Logistics Unit",
    rank: "Senior Fire Officer II",
  },
  {
    name: "SFO2 Romelyn C Ramos",
    position: "Acting Chief, FSIC Processing Unit",
    rank: "Senior Fire Officer II",
  },
  {
    name: "SFO2 Madeliene B Quiminales",
    position: "Acting Chief, Community Relations Unit",
    rank: "Senior Fire Officer II",
  },
  {
    name: "SFO2 Gerry B Panganiban",
    position: "Acting Station Commander, Tipas Fire Station",
    rank: "Senior Fire Officer II",
  },
  {
    name: "SFO1 Paul Edson D Regalado",
    position: "Acting Chief, Special Rescue Force | Concurrent Acting Chief, Public Information Unit",
    rank: "Senior Fire Officer I",
  },
  {
    name: "SFO1 Michelle M De Los Reyes",
    position: "Acting Chief, Morale and Welfare Unit",
    rank: "Senior Fire Officer I",
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
