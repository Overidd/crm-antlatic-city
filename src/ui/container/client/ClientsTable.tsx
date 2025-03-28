import { Checkbox } from '@/ui/components/ui';
import { tableData } from '@/data/clientData';
import { ClientPopverDetail } from './ClientPopverDetail';
import {
   Table,
   TableBody,
   TableCell,
   TableHeader,
   TableRow
} from '@/ui/components/ui/table';


const tableHeaderData = [
   {
      id: 1,
      value: '',
      element: <Checkbox width='w-5' height='h-5' />,
   },
   {
      id: 2,
      value: 'Avatar',
      element: null,
   },
   {
      id: 3,
      value: 'Username',
      element: null,
   },
   {
      id: 4,
      value: 'Email',
      element: null,
   },
   {
      id: 5,
      value: 'Ciudad',
      element: null,
   },
   {
      id: 6,
      value: 'Gasto',
      element: null,
   }
];

export const TableClients = () => {
   return (
      <div className="bg-transparent overflow-y-auto" >
         <Table className="max-w-full">
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
                        <ClientPopverDetail />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div >
   );
}