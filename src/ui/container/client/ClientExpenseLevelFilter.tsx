import { ComponentCard2 } from '@/ui/components/ui/card';
import { SliderRange } from '@/ui/components/ui/slider';

export const ClientExpenseLevelFilter = () => {
   return (
      <ComponentCard2
         title="Nivel de Gastos"
      >
         <SliderRange min={0} max={100} />

      </ComponentCard2>
   )
}