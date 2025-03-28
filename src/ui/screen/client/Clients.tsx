import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronRight, Ellipsis, Filter, X } from 'lucide-react';
import { Checkbox, Input } from '@/ui/components/ui';
import { Pagination } from '@/ui/components/ui/common';
import {
   Table,
   TableBody,
   TableCell,
   TableHeader,
   TableRow,
} from '@/ui/components/ui/table';
import { Sheet, SheetTrigger } from '@/ui/components/ui/sheet';

export const Clients = () => {
   return (
      <>
         <PageBreadcrumb pageTitle="Clientes" />

         <FilterClientAction />
         <FilterClientSheet />

         <section className="space-y-6">
            <ComponentCard title="Clientes">
               <BasicTableOne />
            </ComponentCard>
         </section>
      </>
   );
}

const FilterClientAction = () => {
   return (
      <div className="flex justify-end gap-3 mb-4">
         <Input
            variant="outlined"
            placeholder="Buscar por nombre"
            icon="search"
         />
         <SheetTrigger.Open
            idSheet='filter'
            className="bg-tertiary-light-100 text-secondary-light-200 font-semibold rounded-lg cursor-pointer inline-block space-x-2 p-3"
         >
            <Filter className="inline-block align-middle" />
            <span className="align-middle">Filtro</span>
         </SheetTrigger.Open>
      </div>
   )
}

const FilterClientSheet = () => {
   // const { isOpen,  } = useOpenFilterClient();

   return (
      <Sheet
         idSheet="filter"
         position="right"  // 'right', 'left', 'top', 'bottom'
         width="30%"       // Ancho personalizado (para posiciones laterales)
         height="50%"      // Altura personalizada (para posiciones superior/inferior)
         timeAnimation={300}  // Duración de la animación en ms
      // className="bg-slate-800"  // Clases personalizadas
      >
         {/* Contenido del panel */}
         <SheetTrigger.Close
            idSheet='filter'
            className="absolute top-3 right-3 cursor-pointer"
         >
            <X size={30} />
         </SheetTrigger.Close>
      </Sheet>
   )
}



interface BreadcrumbProps {
   pageTitle: string;
}

const PageBreadcrumb: React.FC<BreadcrumbProps> = ({ pageTitle }) => {
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


interface ComponentCardProps {
   title: string;
   children: React.ReactNode;
   className?: string; // Additional custom classes for styling
}

const ComponentCard: React.FC<ComponentCardProps> = ({
   title,
   children,
   className = '',
}) => {
   const [currentPage, setCurrentPage] = useState(1)
   const totalPages = 20

   return (
      <div className={`bg-tertiary-light-100 rounded-2xl ${className}`}>
         {/* Card Header */}
         <div className="px-6 py-4">
            <h3 className="text-secondary-light-200 text-lg font-medium">
               {title}
            </h3>
         </div>

         {/* Card Body */}
         <div className="p-4 sm:p-6">
            <div className="space-y-6">{children}</div>
            <Pagination
               currentPage={currentPage}
               totalPages={totalPages}
               onPageChange={setCurrentPage}
               siblingCount={1}
               className="mt-6"
            />
         </div>

      </div>
   );
};


// import Badge from "../ui/badge/Badge";

interface IClients {
   id: number;
   avatar: string;
   name: string;
   username: string;
   email: string;
   city: string;
   expense: string;
}

// Define the table data using the interface
const tableData: IClients[] = [
   {
      id: 1,
      avatar: '/user/userDefault.png',
      name: "Lindsey Curtis",
      username: "pepe",
      email: "pepe@gmail.com",
      city: "Arequipa",
      expense: "12.3K",
   },
   {
      id: 2,
      avatar: '/user/userDefault.png',
      name: "Kaiya George",
      username: "carlos",
      email: "carlos@gmail.com",
      city: "Lima",
      expense: "12.3K",
   },
   {
      id: 3,
      avatar: '/user/userDefault.png',
      name: "Zain Geidt",
      username: "megarPillo",
      email: "megarPillo@gmail.com",
      city: "Lima",
      expense: "12.7K",
   },
   {
      id: 4,
      avatar: '/user/userDefault.png',
      name: "Lindsey Curtis",
      username: "pepe",
      email: "pepe@gmail.com",
      city: "Arequipa",
      expense: "12.3K",
   },
   {
      id: 5,
      avatar: '/user/userDefault.png',
      name: "Kaiya George",
      username: "carlos",
      email: "carlos@gmail.com",
      city: "Lima",
      expense: "12.3K",
   },
   {
      id: 6,
      avatar: '/user/userDefault.png',
      name: "Zain Geidt",
      username: "megarPillo",
      email: "megarPillo@gmail.com",
      city: "Lima",
      expense: "12.7K",
   }
];

const tableHeaderData = [
   {
      id: 1,
      value: "",
      element: <Checkbox width="w-5" height="h-5" />
   },
   {
      id: 2,
      value: "Avatar",
      element: null,
   },
   {
      id: 3,
      value: "Username",
      element: null,
   },
   {
      id: 4,
      value: "Email",
      element: null,
   },
   {
      id: 5,
      value: "Ciudad",
      element: null,
   },
   {
      id: 6,
      value: "Gasto",
      element: null,
   }
];

export default function BasicTableOne() {
   return (
      <div className="bg-transparent overflow-hidden">
         <Table className="max-w-full overflow-x-auto">
            <TableHeader className="border-b-2 border-tertiary-light-200">
               <TableRow>
                  {
                     tableHeaderData.map(({ id, value, element }, i) => (
                        <TableCell
                           key={id}
                           isHeader
                           className={`${i === 0 ? '' : 'px-5'} py-3 font-medium uppercase text-start text-theme-xs`}
                        >
                           {
                              (element)
                                 ?
                                 <div className="inline-block align-middle pl-4">
                                    {element}
                                 </div>
                                 : null
                           }

                           <span className="inline-block align-middle text-secondary-light-200 font-bold">
                              {value}
                           </span>
                        </TableCell>
                     ))
                  }
               </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y-2 divide-tertiary-light-200 dark:divide-white/[0.05]">
               {tableData.map(({ id, avatar, name, username, email, city, expense }) => (
                  <TableRow key={id} className='hover:bg-tertiary-light-200 transition-[background-color]'>

                     <TableCell className="pl-4">
                        <Checkbox width="w-5" height="h-5" />
                     </TableCell>

                     <TableCell className="px-5 py-4 sm:px-6 text-start">
                        <div className="flex items-center gap-3">
                           <figure className="w-10 h-10 overflow-hidden rounded-full">
                              <img src={avatar} alt={name} />
                           </figure>
                           <p className="text-sm font-medium text-primary-light-200 dark:text-gray-200">
                              {name}
                           </p>
                        </div>
                     </TableCell>

                     <TableCell className="px-4 py-3 text-primary-light-200 text-start text-theme-sm">
                        {username}
                     </TableCell>

                     <TableCell className="px-4 py-3 text-primary-light-200 text-start text-theme-sm">
                        {email}
                     </TableCell>
                     <TableCell className="px-4 py-3 text-primary-light-200 text-start text-theme-sm">
                        {city}
                     </TableCell>
                     <TableCell className="px-4 py-3 text-primary-light-200 text-theme-sm">
                        {expense}
                     </TableCell>
                     <TableCell className="px-4 py-3 text-primary-light-200 text-theme-sm">
                        <Ellipsis />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
      // </div>
   );
}



