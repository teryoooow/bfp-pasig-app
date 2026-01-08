interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
}

const StepCard = ({ stepNumber, title, description }: StepCardProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-display font-bold">
          {stepNumber}
        </div>
        <div className="flex-1 w-0.5 bg-primary/20 mt-2" />
      </div>
      <div className="flex-1 pb-6">
        <h4 className="font-display font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
