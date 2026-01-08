import { User } from "lucide-react";

interface OfficerCardProps {
  name: string;
  position: string;
  rank: string;
}

const OfficerCard = ({ name, position, rank }: OfficerCardProps) => {
  return (
    <div className="bg-card rounded-xl p-4 card-elevated flex items-center gap-4">
      <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center shrink-0">
        <User className="h-8 w-8 text-secondary-foreground" />
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
