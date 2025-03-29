import { ComponentCard2 } from '@/ui/components/ui/card';
import { ToggleGroup, ToggleItem } from '@/ui/components/ui/toggle';


interface FilterGamesProps {
   dataGames: string[];
}

export const ClientFilterGames = ({ dataGames }: FilterGamesProps) => {
   return (
      <ComponentCard2
         title='Preferencias de juegos'
      >
         <ToggleGroup>
            {
               dataGames.map((game, index) => (
                  <ToggleItem key={index} text={game} />
               ))
            }
         </ToggleGroup>
      </ComponentCard2>
   )
}