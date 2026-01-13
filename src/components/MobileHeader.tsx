import bfpLogo from "@/assets/bfp-logo.png";

interface MobileHeaderProps {
  title?: string;
  showLogo?: boolean;
}

const MobileHeader = ({ title = "BFP Taguig", showLogo = true }: MobileHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 hero-gradient safe-area-top">
      <div className="flex items-center justify-center gap-3 px-4 py-4">
        {showLogo && (
          <img 
            src={bfpLogo} 
            alt="Bureau of Fire Protection Logo" 
            className="h-12 w-12 object-contain"
          />
        )}
        <h1 className="font-display text-xl font-bold text-primary-foreground">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default MobileHeader;
