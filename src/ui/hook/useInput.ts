import { useEffect, useRef, useState } from "react";

export type InputState = Record<string, unknown>;

interface UseInputProps {
   initalState: InputState;
   delay?: number;
}

export const useInput = ({ initalState, delay = 1000 }: UseInputProps) => {
   const [inputState, setInputState] = useState(initalState);
   const callbackRef = useRef<(({ name, value }: { name: string, value: string }) => void) | null>(null);
   const valueRef = useRef<{ name: string, value: string } | null>(null);

   useEffect(() => {
      if (!callbackRef.current || !valueRef.current) return;

      const handler = setTimeout(() => {
         callbackRef.current?.(valueRef.current || { name: '', value: '' });
      }, delay);

      return () => clearTimeout(handler);
   }, [valueRef.current?.value]); // Solo se ejecuta cuando cambia el valor actual

   const handleInputChange = (callback: ({ name, value }: { name: string, value: string }) => void) => {
      callbackRef.current = callback; // Se actualiza dinámicamente el callback

      return (e: React.ChangeEvent<HTMLInputElement>) => {
         const { name, value } = e.target;

         setInputState((prev) => ({
            ...prev,
            [name]: value,
         }));

         valueRef.current = { name, value: value.trim() }; // Guarda el último valor ingresado
      };
   };

   const reset = () => {
      setInputState(initalState);
      valueRef.current = null;
   };

   return {
      ...inputState,
      handleInputChange,
      reset,
   };
};
