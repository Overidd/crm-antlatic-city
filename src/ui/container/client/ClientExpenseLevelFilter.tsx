import { ComponentCard2 } from '@/ui/components/ui/card';
import { SliderRange } from '@/ui/components/ui/slider';


interface IProps {
   onChange: (min: number, max: number) => void
   initalMin: number
   initalMax: number
}

export const ClientExpenseLevelFilter = ({
   onChange,
   initalMin,
   initalMax,
}: IProps) => {
   return (
      <ComponentCard2
         title="Nivel de Gastos"
      >
         <SliderRange
            min={1}
            max={50000}
            defaultMin={initalMin || 0}
            defaultMax={initalMax || 50000}
            onChange={onChange}
         />

      </ComponentCard2>
   )
}