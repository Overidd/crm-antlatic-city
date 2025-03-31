import { countrys } from '@/data';
import { InputSelect } from '@/ui/components/ui';
import { ComponentCard2 } from '@/ui/components/ui/card';


interface Props {
   onChangeSelect: (value: string) => void;
   initialSelect?: string
}

export const ClientLocationFilter = ({ onChangeSelect, initialSelect }: Props) => {

   return (
      <ComponentCard2
         title='Localización'
      >
         <InputSelect
            defaultValue={initialSelect}
            options={countrys}
            onChange={onChangeSelect}
         />
      </ComponentCard2>
   )
}