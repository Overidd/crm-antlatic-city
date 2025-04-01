import { useRef, useState } from "react";
export const Promotions = () => {


   return (
      <main className="text-white" >
         <h1 className="text-2xl font-bold">Crear Campaña Promocional</h1>

         <AdminPromocion />

      </main >
   );
}


import { Calendar, Clock, Upload, X } from "lucide-react"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { clsx as cn } from "@/ui/util/"

interface Cliente {
   id: string
   nombre: string
   rol: string
}

export default function AdminPromocion() {
   const [activeTab, setActiveTab] = useState("cargar")
   const [clientes, setClientes] = useState<Cliente[]>([
      { id: "1", nombre: "Dina Baluarte", rol: "UX Designer" },
      { id: "2", nombre: "Juan José Santibáñez", rol: "Product Manager" },
      { id: "3", nombre: "Morgan Quero", rol: "Content Writer" },
      { id: "4", nombre: "Pedro Chavari", rol: "Project Manager" },
      { id: "5", nombre: "Daniel Urresti", rol: "Creative Writer" },
      { id: "6", nombre: "Morgan Quero", rol: "Content Writer" },
   ])

   const eliminarCliente = (id: string) => {
      setClientes(clientes.filter((cliente) => cliente.id !== id))
   }

   return (
      <div className="flex flex-col lg:flex-row gap-6 p-6 bg-background max-w-7xl mx-auto">
         <div className="flex-1 space-y-6">
            <h1 className="text-xl font-semibold">Administración de promoción</h1>

            {/* Formulario principal */}
            <div className="bg-tertiary-light-100 rounded-lg p-6 space-y-4 bg-card">
               <div className="space-y-2">
                  <label htmlFor="nombre-promocion" className="text-sm font-medium">
                     Nombre de promoción
                  </label>
                  <Input id="nombre-promocion" placeholder="Ingrese el nombre de la promoción" />
               </div>

               <div className="space-y-2">
                  <label htmlFor="descripcion-promocion" className="text-sm font-medium">
                     Descripción de promoción
                  </label>
                  <TextArea
                     placeholder="Ingrese la descripción de la promoción"
                     className="min-h-[80px]"
                  />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                     <label htmlFor="asunto" className="text-sm font-medium">
                        Asunto
                     </label>
                     <Input id="asunto" placeholder="Asunto del mensaje" />
                  </div>

                  <div className="space-y-2">
                     <label htmlFor="fecha-envio" className="text-sm font-medium">
                        Fecha de envío
                     </label>
                     <div className="relative">
                        <Input id="fecha-envio" type="date" className="pl-10" />
                        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label htmlFor="hora-envio" className="text-sm font-medium">
                        Hora de envío
                     </label>
                     <div className="relative">
                        <Input id="hora-envio" type="time" className="pl-10" />
                        <Clock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                     </div>
                  </div>
               </div>
            </div>

            {/* Tabs y plantilla */}
            <Plantilla />
         </div>

         {/* Selección de clientes */}
         <div className="w-full lg:w-80 space-y-4">
            <Button label='Seleccionar clientes' className="w-full" variant="outline">

            </Button>

            <div className="bg-tertiary-light-100 shadow-md rounded-lg p-4 space-y-4">
               <p className="text-sm font-medium">{clientes.length} clientes seleccionados</p>

               <div className="space-y-3">
                  {clientes.map((cliente) => (
                     <div key={cliente.id} className="flex items-center justify-between border-b pb-3">
                        <div>
                           <p className="font-medium text-sm">{cliente.nombre}</p>
                           <p className="text-xs text-muted-foreground">{cliente.rol}</p>
                        </div>
                        <Button className="max-w-fit" startIcon={<X className="h-4 w-4" />} label="" variant="primary" onClick={() => eliminarCliente(cliente.id)}>

                        </Button>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}



import { Editor } from "@tinymce/tinymce-react";
import { Button, Input } from "@/ui/components/ui";

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
      <div className="p-4">
         {/* Botones para guardar y cargar */}
         {/* <div className="flex gap-4 mb-4">
            <input
               type="file"
               accept=".html"
               onChange={handleLoadFile}
               className="border p-2"
            />
            <button
               onClick={handleSave}
               className="bg-blue-500 text-white px-4 py-2 rounded"
            >
               Guardar HTML
            </button>
         </div> */}
         <Tabs defaultValue="cargar" className="w-full bg-tertiary-light-200 p-4 rounded-lg">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
               <TabsTrigger
                  value="cargar"
                  className={cn("rounded-none border-b-2 border-transparent",)}
               // onClick={handleSave}
               // onClick={() => setActiveTab("cargar")}
               >
                  Cargar y editar plantilla
               </TabsTrigger>
               <TabsTrigger
                  value="buscar"
                  className={cn("rounded-none border-b-2 border-transparent")}
               // onClick={() => setActiveTab("buscar")}
               >
                  Buscar plantilla
               </TabsTrigger>
            </TabsList>

            <TabsContent value="cargar" className="space-y-4 mt-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                     <div className="space-y-2">
                        <label htmlFor="nombre-plantilla" className="text-sm font-medium">
                           Nombre de la plantilla
                        </label>
                        <Input id="nombre-plantilla" placeholder="Ingrese el nombre de la plantilla" />
                     </div>

                     <Button label="Guardar plantilla" className="w-full" variant="outline">

                     </Button>

                     <Button label="Enviar promoción" className="w-full"></Button>
                  </div>

                  <div className="border rounded-lg flex flex-col items-center justify-center p-6 bg-muted/30 min-h-[200px]"
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
            </TabsContent>

            <TabsContent value="buscar" className="space-y-4 mt-6">
               <div className="p-8 text-center text-muted-foreground">Contenido de búsqueda de plantilla</div>
            </TabsContent>
         </Tabs>
         {/* Editor TinyMCE */}
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
      </div>
   );
};


import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import TextArea from "@/ui/components/ui/input/TextArea";


const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
   React.ElementRef<typeof TabsPrimitive.List>,
   React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
   <TabsPrimitive.List
      ref={ref}
      className={cn(
         "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
         className,
      )}
      {...props}
   />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
   React.ElementRef<typeof TabsPrimitive.Trigger>,
   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
   <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
         "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
         className,
      )}
      {...props}
   />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
   React.ElementRef<typeof TabsPrimitive.Content>,
   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
   <TabsPrimitive.Content
      ref={ref}
      className={cn(
         "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
         className,
      )}
      {...props}
   />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }

