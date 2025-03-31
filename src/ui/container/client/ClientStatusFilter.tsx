import { Checkbox } from '@/ui/components/ui';
import { ComponentCard2 } from '@/ui/components/ui/card';


interface Props {
   onChangeCheck: (value: string) => void;
   initialSelect?: string
}

export const ClientStatusFilter = ({
   onChangeCheck,
   initialSelect
}: Props) => {

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeCheck(e.target.value);
   }
   return (
      <ComponentCard2
         title='Estado del Cliente'
      >
         <Checkbox
            onChange={onChange}
            label='Activo'
            value={'active'}
            bgCheck='bg-tertiary-light-200'
            checked={initialSelect === 'active' || false}
         />
         <Checkbox
            onChange={onChange}
            label='Inactivo'
            value={'inactive'}
            bgCheck='bg-tertiary-light-200'
            checked={initialSelect === 'inactive' || false}
         />
      </ComponentCard2>
   )
}