import { clsx } from '@/ui/util';
import React, { ReactNode } from 'react';

interface ButtonProps {
  label: ReactNode; // Button label or content
  size?: 'sm' | 'md'; // Button size
  variant?: 'primary' | 'outline' | 'error'; // Button variant
  startIcon?: ReactNode; // Icon before the label
  endIcon?: ReactNode; // Icon after the label
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Disabled state
  title?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  startIcon,
  endIcon,
  onClick,
  className = '',
  disabled = false,
  title
}) => {
  // Size Classes

  // Variant Classes
  const variantClasses = {
    base: 'inline-flex items-center justify-center gap-2 rounded-lg transition-colors py-3 px-4 w-full font-medium',
    primary: 'bg-secondary-light-300 label-white shadow-theme-xs hover:bg-secondary-light-200/80 disabled:bg-brand-300',
    outline: 'font-semibold hover:opacity-90',
    error: 'bg-error-400/80 label-white shadow-theme-xs hover:bg-error-400/90'
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
    >
      {startIcon && <span className='flex items-center'>{startIcon}</span>}
      {label}
      {endIcon && <span className='flex items-center'>{endIcon}</span>}
    </button>
  );
};
