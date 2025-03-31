import { useEffect, useRef } from 'react';
import { ComponentCard2 } from '@/ui/components/ui/card';
import { ToggleGroup, ToggleItem } from '@/ui/components/ui/toggle';

const dataGames = ['Poker', 'Black jack', 'Roulette', 'Gates of Olympus']

interface ClientFilterGamesProps {
   onClientFilterGames: (data: string[]) => void
   initialSelect: string[]
}

export const ClientFilterGames = ({
   onClientFilterGames,
   initialSelect,
}: ClientFilterGamesProps) => {

   const dataSelect = useRef<string[]>(initialSelect || [])

   useEffect(() => {
      dataSelect.current = initialSelect || []
   }, [initialSelect])

   const addDataSelect = (data: string) => {
      if (dataSelect.current.includes(data)) {
         dataSelect.current = dataSelect.current.filter(item => item !== data)
      } else {
         dataSelect.current = [...dataSelect.current, data]
      }
      onClientFilterGames(dataSelect.current)
   }

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
                     onChange={addDataSelect}
                     checked={initialSelect?.includes(game) ?? false}
                  />
               ))
            }
         </ToggleGroup>
      </ComponentCard2>
   )
}