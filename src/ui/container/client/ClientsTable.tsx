import { useEffect, useState } from 'react';
import { Checkbox } from '@/ui/components/ui';
import { ClientPopverDetail } from './ClientPopverDetail';
import { IClient } from '@/domain/interface';
import { useClients } from '@/presentation/hook';
import {
   Table,
   TableBody,
   TableCell,
   TableHeader,
   TableRow
} from '@/ui/components/ui/table';

export const TableClients = () => {

   const {
      clients,
      setSelectedClient,
      selectedClients,
      deleteClientById,
      isLoading,
   } = useClients()

   const onCheckBoxAll = (value: boolean) => {
      if (value) {
         setSelectedClient(clients.map(item => String(item.id)))
         return
      }
      setSelectedClient([]);
   }

   const isCheckedAll = () => {
      return clients.length > 0
         && clients.every((item) => selectedClients?.includes(String(item.id)));
   }

   const isExitClients = () => {
      return clients.length > 0
   }

   return (
      <div className="bg-transparent overflow-y-hidden overflow-x-auto" >
         <Table
            cellPadding='10'
            className="max-w-full"
         >
            <TableHeader className="border-b-2 border-tertiary-light-100">
               <TableHeaderItem
                  initChecked={isCheckedAll()}
                  onCheckBoxAll={onCheckBoxAll}
               />
            </TableHeader>
            <TableBody
               className="divide-y-2 divide-tertiary-light-100 dark:divide-white/[0.05]"
            >
               {
                  isLoading
                     ? [...Array(7)].map((_, index) => (
                        <TableRowItemSkeleton key={index} />
                     ))
                     : isExitClients()
                        ? clients.map((item) => (
                           <TableRowItem
                              key={item.id}
                              dataItem={item}
                              checked={selectedClients?.includes(String(item.id)) ?? false}
                              onCheckBox={setSelectedClient}
                              deleteClientById={deleteClientById}
                           />
                        ))
                        : <TableRow className='w-full h-[20rem] relative'>
                           <TableCell>
                              <figure className="w-[20rem] text-center mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                 <img
                                    className='w-full'
                                    src="./svg/peopleSearch.svg"
                                    alt="people no found svg"
                                 />
                                 <figcaption className='text-secondary-light-200'>No se encontraron clientes</figcaption>
                              </figure>
                           </TableCell>
                        </TableRow>
               }
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
            <div className="inline-block align-middle">
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
                  className={`py-3 font-medium uppercase text-start text-theme-xs`}
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
   deleteClientById: (id: string) => void;
   checked?: boolean;
   dataItem: IClient;
}

const TableRowItem = ({ dataItem, onCheckBox, checked, deleteClientById }: TableRowItemProps) => {
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
      <TableRow className='hover:bg-tertiary-light-100 has-[:checked]:bg-tertiary-light-200 transition-[background-color]' >
         <TableCell className="py-3">
            <Checkbox
               width="w-5"
               height="h-5"
               checked={isCheck}
               onChange={onChange}
               className='peer'
            />
         </TableCell>

         <TableCell className="py-3 text-start">
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

         <TableCell className="py-3 text-primary-light-200 text-start text-theme-sm">
            {username}
         </TableCell>

         <TableCell className="py-3 text-primary-light-200 text-start text-theme-sm">
            {email}
         </TableCell>

         <TableCell className="py-3 text-primary-light-200 text-start text-theme-sm">
            {country}
         </TableCell>

         <TableCell className="py-3 text-primary-light-200 text-theme-sm">
            S/ {totalExpenses}
         </TableCell>

         <TableCell className="py-3 text-primary-light-200 text-theme-sm">
            <ClientPopverDetail
               idClient={String(id)}
               username={username}
               deleteClientById={deleteClientById}
            />
         </TableCell>
      </TableRow>
   )
}

const TableRowItemSkeleton = () => {

   return (
      <TableRow >
         {
            Array.from({ length: 7 }).map((_, index) => (
               <TableCell className="py-3" key={index}>
                  <div className="h-10 animate-pulse space-y-2 overflow-hidden bg-tertiary-light-100"></div>
               </TableCell>
            ))
         }
      </TableRow>
   )
}