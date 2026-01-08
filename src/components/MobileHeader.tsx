import { Flame } from "lucide-react";

interface MobileHeaderProps {
  title?: string;
  showLogo?: boolean;
}

const MobileHeader = ({ title = "BFP Taguig", showLogo = true }: MobileHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 hero-gradient safe-area-top">
      <div className="flex items-center justify-center gap-3 px-4 py-4">
        {showLogo && (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm">
            <Flame className="h-6 w-6 text-primary-foreground" />
          </div>
        )}
        <h1 className="font-display text-xl font-bold text-primary-foreground">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default MobileHeader;
