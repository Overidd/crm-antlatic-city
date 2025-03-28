import { CardAuth } from '@/ui/components/auth';
import { LogoText } from '@/ui/components/ui/text';
import { Outlet } from 'react-router-dom';

export const LayoutAuth = () => {
   return (
      <main
         className="h-screen w-screen relative gradient-bg flex items-center justify-center overflow-hidden"
      >
         <div className="w-[90%] max-w-md lg:max-w-[31rem] mx-auto space-y-10 z-10">
            <LogoText />
            <CardAuth>
               <Outlet />
            </CardAuth>
         </div>
      </main >
   )
}
