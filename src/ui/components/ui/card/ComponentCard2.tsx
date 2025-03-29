
interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const ComponentCard2: React.FC<ComponentCardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`rounded-lg space-y-3 ${className}`}>
      <h4 className="text-secondary-light-200 text-base font-medium">
        {title}
      </h4>

      {children}
    </div>
  );
}
