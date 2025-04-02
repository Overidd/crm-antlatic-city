
type Colors = 'text-primary-light-200' | 'text-secondary-light-200'

type align = 'text-left' | 'text-center' | 'text-right'

interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  colorTitle?: Colors
  alignTitle?: align;
}

export const ComponentCard2: React.FC<ComponentCardProps> = ({
  title,
  children,
  className = '',
  colorTitle = 'text-secondary-light-200',
  alignTitle = 'left'
}) => {
  return (
    <div className={`rounded-lg space-y-3 ${className}`}>
      <h4 className={`text-base font-medium ${colorTitle} ${alignTitle}`}>
        {title}
      </h4>
      {children}
    </div>
  );
}
