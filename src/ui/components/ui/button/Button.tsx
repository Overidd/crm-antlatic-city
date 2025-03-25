import { clsx } from '@/ui/util';
import React, { ReactNode } from 'react';

interface ButtonProps {
  label: ReactNode; // Button label or content
  size?: 'sm' | 'md'; // Button size
  variant?: 'primary' | 'outline'; // Button variant
  startIcon?: ReactNode; // Icon before the label
  endIcon?: ReactNode; // Icon after the label
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Disabled state
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  startIcon,
  endIcon,
  onClick,
  className = '',
  disabled = false,
}) => {
  // Size Classes

  // Variant Classes
  const variantClasses = {
    base: 'inline-flex items-center justify-center gap-2 rounded-lg transition-colors py-3 px-4 w-full',
    primary: 'bg-brand-500 label-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300',
    outline: 'bg-tertiary-light-300 label-while font-semibold hover:opacity-80',
  };

  const wrapperClasses = clsx(
    variantClasses[variant],
    variantClasses.base,
    {
      'cursor-not-allowed opacity-50': disabled
    }
  )

  return (
    <button
      className={`${wrapperClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className='flex items-center'>{startIcon}</span>}
      {label}
      {endIcon && <span className='flex items-center'>{endIcon}</span>}
    </button>
  );
};
