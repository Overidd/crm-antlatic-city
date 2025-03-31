import { useEffect, useState } from 'react';
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


interface IClientTableProps {
   clients: IClient[];
   onSelectedClient: (id: string | string[]) => void;
   initSelected?: string[]
}
export const TableClients = ({ clients, onSelectedClient, initSelected }: IClientTableProps) => {
   const onCheckBoxAll = (value: boolean) => {
      if (value) {
         onSelectedClient(clients.map(item => String(item.id)))
         return
      }
      onSelectedClient([]);
   }

   const isCheckedAll = () => {
      return clients.every((item) => initSelected?.includes(String(item.id)))
   }

   return (
      <div className="bg-transparent overflow-y-auto" >
         <Table className="max-w-full">
            <TableHeader className="border-b-2 border-tertiary-light-200">
               <TableHeaderItem
                  initChecked={isCheckedAll()}
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
                     checked={initSelected?.includes(String(item.id)) ?? false}
                     onCheckBox={onSelectedClient}
                  />
               ))}
            </TableBody>
         </Table>
      </div >
   );
}


interface TableHeaderItemProps {
   onCheckBoxAll: (value: boolean) => void,
   initChecked?: boolean
}

const TableHeaderItem = ({ onCheckBoxAll, initChecked }: TableHeaderItemProps) => {
   return (
      <TableRow>
         <TableCell
            isHeader
            className={`py-3 font-medium uppercase text-start text-theme-xs`}
         >
            <div className="inline-block align-middle pl-4">
               <Checkbox
                  onChange={(e) => onCheckBoxAll(e.target.checked)}
                  checked={initChecked}
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
   onCheckBox: (value: string) => void;
   checked?: boolean;
   dataItem: IClient;
}

const TableRowItem = ({ dataItem, onCheckBox, checked }: TableRowItemProps) => {
   const { id, avatar, username, email, totalExpenses, firstName, country } = dataItem

   const [isCheck, setIsCheck] = useState(checked)

   useEffect(() => {
      if (checked === isCheck) return;
      setIsCheck(checked)
   }, [checked])

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsCheck(e.target.checked)
      onCheckBox(String(id))
   }

   return (
      <TableRow className='hover:bg-tertiary-light-200 has-[:checked]:bg-tertiary-light-200 transition-[background-color]' >
         <TableCell className="pl-4">
            <Checkbox
               width="w-5"
               height="h-5"
               checked={isCheck}
               onChange={onChange}
               className='peer'
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