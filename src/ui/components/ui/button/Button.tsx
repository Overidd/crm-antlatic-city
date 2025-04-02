import { ReactNode } from 'react';
import { clsx } from '@/ui/util';

interface ButtonProps {
  label: ReactNode;
  size?: 'sm' | 'md';
  variant?: 'primary' | 'outline' | 'error';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  className?: string;
  title?: string;
  type?: 'button' | 'submit'
  name?: string
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  startIcon,
  endIcon,
  onClick,
  title,
  name,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  // Size Classes

  // Variant Classes
  const variantClasses = {
    base: 'inline-flex items-center justify-center gap-2 rounded-lg transition-colors py-3 px-4 w-full font-medium block',
    primary: 'bg-secondary-light-300 label-white hover:bg-secondary-light-200/80 disabled:bg-brand-300',
    outline: 'font-semibold hover:opacity-90',
    error: 'bg-error-400/80 label-white hover:bg-error-400/90'
  };

  const wrapperClasses = clsx(
    variantClasses.base,
    variantClasses[variant],
    {
      'cursor-not-allowed opacity-50': disabled
    }
  )

  return (
    <button
      className={`${wrapperClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      title={title}
      type={type}
      name={name}
    >
      {startIcon && <span className='flex items-center'>{startIcon}</span>}
      {label}
      {endIcon && <span className='flex items-center'>{endIcon}</span>}
    </button>
  );
};
