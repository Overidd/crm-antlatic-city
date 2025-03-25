import { TIconsOptions, IconComponent } from '@/ui/asset';
import { clsx } from '@/ui/util/clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   success?: boolean;
   error?: boolean;
   messageError?: string;
   icon?: TIconsOptions;
}

export const Input = ({ type = "text", placeholder, name, value, className = "", disabled = false, success = false, error = false, messageError, icon,
   ...rest }: InputProps) => {

   const inputClasses = clsx(
      `peer h-11 w-full bg-transparent text-white font-semibold appearance-none placeholder:text-gray-300 focus:outline-none ${className}`
   );

   const wrapperClasses = clsx(
      'relative border-b-2 border-primary-light-300 transition-colors duration-200 ease-in-out',
      {
         'pl-7': !!icon,
         'has-[:focus]:ring-error-500 has[:focus]:border-error-500': error,
         'has-[:focus]:border-primary-light-100': !error && !success,
      }
   )

   const Icon = icon ? IconComponent[icon] : null;

   return (
      <div className={wrapperClasses}>

         <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            className={inputClasses}
            disabled={disabled}
            aria-invalid={error ? "true" : "false"}
            {...rest}
         />

         {Icon && (
            <Icon className={`w-5 h-5 absolute left-0 top-1/2 -translate-y-1/2 dark:text-gray-400`} />
         )}

         {error && messageError && (
            <p className="mt-1.5 text-xs text-error-500">
               {messageError}
            </p>
         )}
      </div>
   );
};
