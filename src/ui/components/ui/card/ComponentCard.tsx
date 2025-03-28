
interface ComponentCardProps {
   title: string;
   children: React.ReactNode;
   className?: string;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({ title, children, className = '' }) => {
   return (
      <div className={`bg-tertiary-light-100 rounded-2xl ${className}`}>
         <div className="px-6 py-4">
            <h3 className="text-secondary-light-200 text-lg font-medium">
               {title}
            </h3>
         </div>

         <div className="p-4 sm:p-6 space-y-6">
            {children}
         </div>
      </div>
   );
};