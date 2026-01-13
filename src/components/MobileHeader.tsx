interface MobileHeaderProps {
  title?: string;
}

const MobileHeader = ({ title = "BFP Taguig" }: MobileHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 hero-gradient safe-area-top">
      <div className="flex items-center justify-center px-4 py-4">
        <h1 className="font-display text-xl font-bold text-primary-foreground">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default MobileHeader;
