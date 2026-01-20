import { User } from "lucide-react";
import { useState } from "react";

interface OfficerCardProps {
  name: string;
  position: string;
  rank: string;
  image?: string;
}

const OfficerCard = ({ name, position, rank, image }: OfficerCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-card rounded-xl p-4 card-elevated flex items-center gap-4">
      <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center shrink-0 overflow-hidden">
        {image && !imageError ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover rounded-full"
            onError={() => setImageError(true)}
          />
        ) : (
          <User className="h-8 w-8 text-secondary-foreground" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">
          {rank}
        </p>
        <h3 className="font-display font-semibold text-foreground truncate">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{position}</p>
      </div>
    </div>
  );
};

export default OfficerCard;
