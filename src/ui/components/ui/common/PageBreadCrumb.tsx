import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadCrumbProps {
   pageTitle: string;
}

export const PageBreadCrumb: React.FC<BreadCrumbProps> = ({ pageTitle }) => {
   return (
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
         <h2
            className="text-xl font-semibold"
            x-text="pageName"
         >
         </h2>
         <nav>
            <ol className="flex items-center gap-1.5 font-semibold">
               <li className="text-primary-light-300">
                  <Link
                     className="inline-flex items-center gap-1.5 text-sm"
                     to="/"
                  >
                     Dashboard
                     <ChevronRight />
                  </Link>
               </li>
               <li className="text-primary-light-200 text-sm">
                  {pageTitle}
               </li>
            </ol>
         </nav>
      </div>
   );
};

