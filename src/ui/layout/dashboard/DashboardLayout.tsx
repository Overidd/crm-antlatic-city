import AppHeader from "@/ui/container/header/AppHeader";
import AppSidebar from "@/ui/container/sidebar/AppSidebar"
import { SidebarProvider, useSidebar } from "@/ui/context";
import { Outlet } from "react-router-dom";


export const DashboardLayout = () => {
   const { isExpanded, isHovered, isMobileOpen } = useSidebar();

   return (
      <div className="min-h-dvh w-full xl:flex bg-tertiary-light-300">
         <AppSidebar />
         {/* <Backdrop /> */}
         <div
            className={`flex-1 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
               } ${isMobileOpen ? "ml-0" : ""}`}
         >
            <AppHeader />
            <main className="p-4 max-w-screen-2xl mx-auto md:p-6">
               <Outlet />
            </main>
         </div>
      </div>
   )
}

export const AppLayout: React.FC = () => {
   return (

      <SidebarProvider>
         <DashboardLayout />
      </SidebarProvider>
   );
};
