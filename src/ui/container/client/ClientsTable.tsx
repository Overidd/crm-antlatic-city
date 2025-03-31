import { Checkbox } from '@/ui/components/ui';
import { ClientPopverDetail } from './ClientPopverDetail';
import { IClient } from '@/domain/interface';
import {
   Table,
   TableBody,
   TableCell,
   TableHeader,
   TableRow
} from '@/ui/components/ui/table';
import { useState } from 'react';


interface IClientTableProps {
   clients: IClient[]
}
export const TableClients = ({ clients }: IClientTableProps) => {

   const [isSelectAll, setisSelectAll] = useState(false)

   const onCheckBoxAll = (value: boolean) => {
      setisSelectAll(value)
   }

   const onCheckBoxItem = (value: IClient) => {

   }

   return (
      <div className="bg-transparent overflow-y-auto" >
         <Table className="max-w-full">
            <TableHeader className="border-b-2 border-tertiary-light-200">
               <TableHeaderItem
                  onCheckBoxAll={onCheckBoxAll}
               />
            </TableHeader>
            <TableBody
               className="divide-y-2 divide-tertiary-light-200 dark:divide-white/[0.05]"
            >
               {clients.map((item) => (
                  <TableRowItem
                     key={item.id}
                     dataItem={item}
                     checked={isSelectAll}
                     onCheckBox={onCheckBoxItem}
                  />
               ))}
            </TableBody>
         </Table>
      </div >
   );
}


interface TableHeaderItemProps {
   onCheckBoxAll: (value: boolean) => void
}

const TableHeaderItem = ({ onCheckBoxAll }: TableHeaderItemProps) => {
   return (
      <TableRow>
         <TableCell
            isHeader
            className={`py-3 font-medium uppercase text-start text-theme-xs`}
         >
            <div className="inline-block align-middle pl-4">
               <Checkbox
                  onChange={(e) => onCheckBoxAll(e.target.checked)}
                  width='w-5'
                  height='h-5'
               />
            </div>
         </TableCell>
         {
            ['Avatar', 'Username', 'Email', 'Paise', 'Gasto'].map((value) => (
               <TableCell
                  key={value}
                  isHeader
                  className={`px-5 py-3 font-medium uppercase text-start text-theme-xs`}
               >
                  <span className="inline-block align-middle text-secondary-light-200 font-bold">
                     {value}
                  </span>
               </TableCell>
            ))
         }
      </TableRow>
   );
}

interface TableRowItemProps {
   onCheckBox: (value: IClient) => void;
   checked?: boolean;
   dataItem: IClient;
}

const TableRowItem = ({ dataItem, onCheckBox, checked }: TableRowItemProps) => {
   const { avatar, username, email, totalExpenses, firstName, country } = dataItem

   return (
      <TableRow className='hover:bg-tertiary-light-200 transition-[background-color]' >
         <TableCell className="pl-4">
            <Checkbox
               width="w-5"
               height="h-5"
               checked={checked}
               onChange={() => onCheckBox(dataItem)}
            />
         </TableCell>

         <TableCell className="px-5 py-4 sm:px-6 text-start">
            <div className="flex items-center gap-3">
               <figure className="w-10 h-10 overflow-hidden rounded-full">
                  <img
                     src={avatar}
                     alt={firstName}
                  />
               </figure>
               <p className="text-sm font-medium text-primary-light-200 dark:text-gray-200">
                  {firstName}
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
            {country}
         </TableCell>

         <TableCell className="px-4 py-3 text-primary-light-200 text-theme-sm">
            S/ {totalExpenses}
         </TableCell>

         <TableCell className="px-4 py-3 text-primary-light-200 text-theme-sm">
            <ClientPopverDetail />
         </TableCell>
      </TableRow>
   )
}