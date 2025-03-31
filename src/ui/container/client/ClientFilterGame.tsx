import { ComponentCard2 } from '@/ui/components/ui/card';
import { ToggleGroup, ToggleItem } from '@/ui/components/ui/toggle';

const dataGames = ['Poker', 'Black jack', 'Roulette', 'Gates of Olympus']

interface ClientFilterGamesProps {
   onClientFilterGames: (data: string) => void
   initialSelect: string[]
}

export const ClientFilterGames = ({
   onClientFilterGames,
   initialSelect,
}: ClientFilterGamesProps) => {

   return (
      <ComponentCard2
         title='Preferencias de juegos'
      >
         <ToggleGroup>
            {
               dataGames.map((game, index) => (
                  <ToggleItem
                     key={index}
                     text={game}
                     onChange={onClientFilterGames}
                     checked={initialSelect?.includes(game) ?? false}
                  />
               ))
            }
         </ToggleGroup>
      </ComponentCard2>
   )
}