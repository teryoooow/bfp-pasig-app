import { Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface ContactCardProps {
  name: string;
  address?: string;
  phone: string;
  type?: "station" | "emergency";
}

const ContactCard = ({ name, address, phone, type = "station" }: ContactCardProps) => {
  const handleCall = () => {
    window.location.href = `tel:${phone.replace(/\s/g, "")}`;
  };

  return (
    <div className="bg-card rounded-xl p-4 card-elevated">
      <h3 className="font-display font-semibold text-foreground mb-2">{name}</h3>
      {address && (
        <div className="flex items-start gap-2 text-muted-foreground text-sm mb-3">
          <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
          <span>{address}</span>
        </div>
      )}
      <Button
        onClick={handleCall}
        variant={type === "emergency" ? "emergency" : "default"}
        className="w-full"
      >
        <Phone className="h-4 w-4" />
        {phone}
      </Button>
    </div>
  );
};

export default ContactCard;
