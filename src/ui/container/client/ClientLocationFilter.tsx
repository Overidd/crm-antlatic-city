import { InputSelect } from '@/ui/components/ui';
import { ComponentCard2 } from '@/ui/components/ui/card';

export const ClientLocationFilter = () => {

   return (
      <ComponentCard2
         title='Localización'
      >
         <InputSelect
            options={[{
               value: '1',
               label: 'Ciudad 1'
            }, {
               value: '2',
               label: 'Ciudad 2'
            }, {
               value: '3',
               label: 'Ciudad 3'
            }]}
            onChange={() => { }}
         />
      </ComponentCard2>
   )
}