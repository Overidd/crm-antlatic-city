import { Checkbox } from '@/ui/components/ui';
import { ComponentCard2 } from '@/ui/components/ui/card';

export const ClientStatusFilter = () => {
   return (
      <ComponentCard2
         title='Estado del Cliente'
      >
         <Checkbox
            label='Activo'
            bgCheck='bg-tertiary-light-200'
         />
         <Checkbox
            label='Inactivo'
            bgCheck='bg-tertiary-light-200'
         />
         <Checkbox
            label='VIP'
            bgCheck='bg-tertiary-light-200'
         />
      </ComponentCard2>
   )
}