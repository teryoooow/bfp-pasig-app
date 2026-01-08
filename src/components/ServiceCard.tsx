import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
  variant?: "default" | "primary" | "secondary";
}

const ServiceCard = ({ icon: Icon, title, description, path, variant = "default" }: ServiceCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={cn(
        "w-full flex items-center gap-4 p-4 rounded-xl card-elevated text-left transition-all duration-200",
        variant === "default" && "bg-card",
        variant === "primary" && "hero-gradient text-primary-foreground",
        variant === "secondary" && "navy-gradient text-secondary-foreground"
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
          variant === "default" && "bg-primary/10 text-primary",
          variant === "primary" && "bg-primary-foreground/20 text-primary-foreground",
          variant === "secondary" && "bg-secondary-foreground/20 text-secondary-foreground"
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display font-semibold text-base truncate">{title}</h3>
        <p
          className={cn(
            "text-sm truncate",
            variant === "default" && "text-muted-foreground",
            variant !== "default" && "opacity-80"
          )}
        >
          {description}
        </p>
      </div>
    </button>
  );
};

export default ServiceCard;
