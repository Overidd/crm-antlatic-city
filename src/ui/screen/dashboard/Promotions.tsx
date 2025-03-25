import { useRef, useState } from "react";
export const Promotions = () => {

   const [campaignName, setCampaignName] = useState("");
   const [description, setDescription] = useState("");
   const [startDate, setStartDate] = useState("");
   const [endDate, setEndDate] = useState("");

   return (
      <main className="" >
         <h1 className="text-2xl font-bold">Crear Campaña Promocional</h1>

         {/* Formulario */}
         <div className="bg-gray-800 p-6 rounded-lg mt-4 space-y-4">
            <input
               type="text"
               placeholder="Nombre de la campaña"
               className="w-full p-2 bg-gray-700 rounded"
               value={campaignName}
               onChange={(e) => setCampaignName(e.target.value)}
            />

            <textarea
               placeholder="Descripción"
               className="w-full p-2 bg-gray-700 rounded"
               rows={3}
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            />

            <div className="grid grid-cols-2 gap-4">
               <input
                  type="date"
                  className="w-full p-2 bg-gray-700 rounded"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
               />
               <input
                  type="date"
                  className="w-full p-2 bg-gray-700 rounded"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
               />
            </div>

            <div className="flex gap-4">
               <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
                  Cargar Plantilla HTML
               </button>
               <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-500">
                  Crear desde Cero
               </button>
            </div>
         </div>


         {/* Vista Previa */}
         <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <h2 className="text-xl font-bold">Vista Previa</h2>
            <div className="bg-gray-700 h-40 mt-2 flex items-center justify-center rounded">
               <p className="text-gray-400">Aquí se mostrará la plantilla del correo...</p>
            </div>
         </div>

         {/* Estadísticas */}
         <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
               <h3 className="text-xl font-bold">📨 500</h3>
               <p className="text-gray-400">Correos Enviados</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
               <h3 className="text-xl font-bold">📬 250</h3>
               <p className="text-gray-400">Aperturas</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
               <h3 className="text-xl font-bold">🔗 100</h3>
               <p className="text-gray-400">Clics</p>
            </div>
         </div>

         {/* Botón de enviar */}
         <button className="bg-purple-600 w-full mt-6 py-3 rounded-lg hover:bg-purple-500">
            Enviar Campaña
         </button>

         <EditorTiny />

      </main >
   );
}

import { Editor } from "@tinymce/tinymce-react";

const EditorTiny = () => {
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

   // Cargar un archivo HTML en el editor
   const handleLoadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
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

   return (
      <div className="p-4">
         {/* Botones para guardar y cargar */}
         <div className="flex gap-4 mb-4">
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
         </div>

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

