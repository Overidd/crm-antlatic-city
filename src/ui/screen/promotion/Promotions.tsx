import { useRef, useState } from 'react';
import { Search, Upload, X } from 'lucide-react'

export const Promotions = () => {


   return (
      <>
         <AdminPromocion />
      </ >
   );
}


export default function AdminPromocion() {
   const { clearCliente, clients } = useClientPromotion()


   return (
      <ComponentCard
         title='Administración de promoción'
         className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 space-y-0"
      >
         <div className="text-primary-light-200 shadow-md shadow-tertiary-light-300 rounded-lg p-6 space-y-6">
            <Input
               id="nombre-promocion"
               variant='filled'
               placeholder="Ingrese el nombre de la promoción"
            />
            <Input
               id="nombre-promocion"
               variant='filled'
               placeholder="Descripción de la promoción"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <Input
                  id="nombre-promocion"
                  variant='filled'
                  placeholder="Asunto del mensaje"
               />
               <Input
                  id="fecha-envio"
                  variant='filled'
                  type="date"
               />

               <Input
                  id="hora-envio"
                  variant='filled'
                  type="time"
               />
            </div>

            <Button
               label="Enviar promoción"
               className="w-full"
               variant="primary"
            />
         </div>

         {/* Selección de clientes */}
         <div className="row-span-2 text-primary-light-200 w-full shadow-md shadow-tertiary-light-300 rounded-lg p-6 space-y-6">
            {clients.map((cliente) => (
               <div key={cliente.id} className="flex items-center justify-between border-b-2 border-tertiary-light-100 gap-4">
                  <div className='w-[60%]'>
                     <p className="font-medium text-sm">{cliente.firstName}</p>
                     <p className='text-xs whitespace-nowrap text-ellipsis overflow-hidden'>{cliente.email}</p>
                  </div>
                  <Button
                     label=""
                     variant="primary"
                     className="max-w-fit ml-auto"
                     startIcon={<X className="h-4 w-4" />}
                     onClick={() => clearCliente(cliente.id)}
                  >
                  </Button>
               </div>
            ))}
         </div>

         <Plantilla />
      </ComponentCard>
   )
}


import { Editor } from "@tinymce/tinymce-react";
import { Button, Input } from "@/ui/components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/components/ui/tabs";
import { ComponentCard } from '@/ui/components/ui/card';
import { useClientPromotion } from '@/presentation/hook';

const Plantilla = () => {
   const editorRef = useRef<any>(null);
   const [fileName, setFileName] = useState<string>("document.html");

   // Guardar el contenido en un archivo HTML
   const handleSave = () => {
      if (editorRef.current) {
         const content = editorRef.current.getContent();
         const blob = new Blob([content], { type: "text/html" });
         const url = URL.createObjectURL(blob);

         // Crear un enlace para descargar el archivo
         const a = document.createElement("a");
         a.href = url;
         a.download = fileName;
         document.body.appendChild(a);
         a.click();
         document.body.removeChild(a);
      }
   };

   // const handleLoadFile = (event: React.DragEventHandler<HTMLDivElement>) => {
   //    const file = event.target.files?.[0];
   //    if (!file) return;

   //    const reader = new FileReader();
   //    reader.onload = (e) => {
   //       const content = e.target?.result as string;
   //       if (editorRef.current) {
   //          editorRef.current.setContent(content);
   //       }
   //    };
   //    reader.readAsText(file);
   // };


   const handleLoadFile = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const file = event.dataTransfer.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
         const content = e.target?.result as string;
         if (editorRef.current) {
            editorRef.current.setContent(content);
         }
      };
      reader.readAsText(file);
   };

   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
   };


   //
   return (
      <Tabs defaultValue="cargar" className="w-full shadow-md shadow-tertiary-light-300 rounded-lg p-6 space-y-6">
         <TabsList className="text-primary-light-200 grid grid-cols-2 w-full max-w-md">
            <TabsTrigger
               value="cargar"
            >
               Cargar y editar plantilla
            </TabsTrigger>
            <TabsTrigger
               value="buscar"
            >
               Buscar plantilla
            </TabsTrigger>
         </TabsList>

         <TabsContent value="cargar" className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <div className="space-y-2">
                     <Input
                        id="nombre-plantilla"
                        variant='filled'
                        placeholder="Ingrese el nombre de la plantilla"
                     />
                  </div>

                  <Button
                     label="Guardar plantilla"
                     className="w-full text-primary-light-200"
                     variant="primary"
                  />
               </div>

               <div className="text-primary-light-200 bg-tertiary-light-100 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer"
                  onDrop={handleLoadFile} onDragOver={handleDragOver}
               >
                  <div className="flex flex-col items-center text-center">
                     <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                     <p className="text-sm font-medium mb-1">Cargar Plantilla html</p>
                     <p className="text-xs text-muted-foreground">
                        Drag and drop your PNG, JPG, WebP, SVG,
                        <br />
                        images here or browse
                     </p>
                  </div>
               </div>
            </div>

            <Editor
               apiKey="ye1xoiw180g0upin9ls3n5t62z2zu737x7i5g6luakjqz870" // Puedes obtener una API gratuita en TinyMCE
               onInit={(_, editor) => (editorRef.current = editor)}
               initialValue="<p>Escribe aquí...</p>"
               init={{
                  height: 700,
                  menubar: true,
                  plugins: "autoresize lists link image code table preview",
                  toolbar:
                     "undo redo | bold italic | alignleft aligncenter alignright alignjustify | " +
                     "bullist numlist outdent indent | link image | code",
               }}
            />
         </TabsContent>

         <TabsContent value="buscar" className="text-primary-light-200 space-y-4 mt-6">
            <Input
               id="buscar-plantilla"
               variant='filled'
               placeholder="Ingrese el nombre de la plantilla"
            />
            <Button
               startIcon={<Search />}
               label="Buscar plantilla"
               className="w-full"
               variant="primary"
            />
         </TabsContent>
      </Tabs>
   );
};

