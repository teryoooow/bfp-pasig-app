import { Building2 } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import ContactCard from "@/components/ContactCard";
import { substations } from "@/data/substations";
import { Link } from "react-router-dom";

const Substations = () => {
  return (
    <PageContainer title="Fire Substations" showBack={true}>
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
              key={station.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Link to={`/substations/${station.id}`}>
                <div className="transition-transform active:scale-[0.98]">
                  <ContactCard
                    name={station.name}
                    address={station.address}
                    phone={station.phone}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Substations;
