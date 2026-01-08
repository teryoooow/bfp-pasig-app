import { Building2 } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import ContactCard from "@/components/ContactCard";

const substations = [
  {
    name: "Taguig City Fire Station (Main)",
    address: "C6 Road, Brgy. Ususan, Taguig City",
    phone: "(02) 8838-1234",
  },
  {
    name: "BGC Fire Sub-Station",
    address: "32nd Street cor. 5th Avenue, BGC, Taguig City",
    phone: "(02) 8838-2345",
  },
  {
    name: "Signal Village Fire Sub-Station",
    address: "Gen. Santos Ave., Signal Village, Taguig City",
    phone: "(02) 8838-3456",
  },
  {
    name: "Lower Bicutan Fire Sub-Station",
    address: "Padre Diego Cera Ave., Lower Bicutan, Taguig City",
    phone: "(02) 8838-4567",
  },
  {
    name: "Western Bicutan Fire Sub-Station",
    address: "Sampaguita St., Western Bicutan, Taguig City",
    phone: "(02) 8838-5678",
  },
  {
    name: "Tuktukan Fire Sub-Station",
    address: "Tuktukan, Taguig City",
    phone: "(02) 8838-6789",
  },
];

const Substations = () => {
  return (
    <PageContainer title="Fire Substations">
      <div className="px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-xl hero-gradient flex items-center justify-center">
            <Building2 className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-display font-bold text-foreground">
              Taguig City Fire Stations
            </h2>
            <p className="text-sm text-muted-foreground">
              {substations.length} stations ready to serve
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          {substations.map((station, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ContactCard
                name={station.name}
                address={station.address}
                phone={station.phone}
              />
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Substations;
