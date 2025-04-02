
interface ComponentCardProps {
   title: string;
   children: React.ReactNode;
   className?: string;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({ title, children, className = '' }) => {
   return (
      <div className={`bg-tertiary-light-200 rounded-2xl`}>
         <h3 className="text-secondary-light-200 text-lg font-medium px-6 py-4">
            {title}
         </h3>
         <div className={`p-4 sm:p-6 space-y-6 min-h-[38.5rem] ${className}`}>
            {children}
         </div>
      </div>
   );
};