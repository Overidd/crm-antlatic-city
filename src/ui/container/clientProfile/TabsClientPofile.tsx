import { ComponentCard2 } from "@/ui/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/components/ui/tabs"

interface TabsClientPofilePops {
   headerTitle: string[]
   bodyNode: React.ReactNode[]
}

export const TabsClientPofile = ({ bodyNode, headerTitle }: TabsClientPofilePops) => {
   return (
      <ComponentCard2
         title="Información del cliente"
         colorTitle="text-primary-light-200"
         className="p-5 shadow-md shadow-tertiary-light-300  rounded-2xl lg:p-6"
      >
         <Tabs defaultValue={headerTitle[0]}>
            <TabsList className="grid grid-cols-2 w-full max-w-md">
               {
                  headerTitle.map((title, index) => (
                     <TabsTrigger
                        key={index}
                        value={title}
                        className={"border-b-2 border-transparent data-[state=active]:border-secondary-light-200 text-primary-light-200"}
                     >
                        {title}
                     </TabsTrigger>
                  ))
               }
            </TabsList>
            {
               bodyNode.map((node, index) => (
                  <TabsContent
                     key={index}
                     value={headerTitle[index]}
                     className="space-y-4 mt-6"
                  >
                     {node}
                  </TabsContent>
               ))
            }
         </Tabs>
      </ComponentCard2>
   )
}
