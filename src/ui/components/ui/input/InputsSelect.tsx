import { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  defaultValue?: string;
}

export const InputSelect: React.FC<SelectProps> = ({
  options,
  placeholder = 'Seleccione una opción',
  onChange,
  className = '',
  defaultValue = '',
}) => {
  // Manage the selected value
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value); // Trigger parent handler
  };

  return (
    <select
      className={`h-11 w-full text-primary-light-200 appearance-none rounded-lg bg-tertiary-light-200 px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-1 focus:ring-secondary-light-200 ${className}`}
      value={selectedValue}
      onChange={handleChange}
    >
      {/* Placeholder option */}
      <option
        value=""
        disabled
        className="text-primary-light-200 bg-tertiary-light-200"
      >
        {placeholder}
      </option>
      {/* Map over options */}
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="text-primary-light-200 bg-tertiary-light-200"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

