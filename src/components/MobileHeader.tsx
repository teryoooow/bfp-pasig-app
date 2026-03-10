import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MobileHeaderProps {
  title?: string;
  showBack?: boolean;
}

const MobileHeader = ({ title = "BFP Pasig", showBack = false }: MobileHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 hero-gradient safe-area-top text-primary-foreground">
      <div className="flex items-center justify-between px-4 py-4 min-h-[60px]">
        {showBack ? (
          <button
            onClick={() => navigate(-1)}
            className="p-1 -ml-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        ) : (
          <div className="w-6" /> /* Spacing placehoder */
        )}

        <h1 className="font-display text-xl font-bold flex-1 text-center">
          {title}
        </h1>

        <div className="w-6" /> {/* Balance right side */}
      </div>
    </header>
  );
};

export default MobileHeader;
