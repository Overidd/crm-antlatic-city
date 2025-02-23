import AppHeader from "@/ui/container/header/AppHeader";
import AppSidebar from "@/ui/container/sidebar/AppSidebar"
import { SidebarProvider, useSidebar } from "@/ui/context";




export const DashboardLayout = () => {
   const { isExpanded, isHovered, isMobileOpen } = useSidebar();

   return (
      <div className="min-h-screen w-dvw xl:flex gradient-bg">
         <div>
            <AppSidebar />
            {/* <Backdrop /> */}
         </div>
         <div
            className={`flex-1 transition-all duration-300 ease-in-out ${isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
               } ${isMobileOpen ? "ml-0" : ""}`}
         >
            <AppHeader />
            <div className="p-4 mx-auto max-w-screen-2xl md:p-6">
               {/* <Outlet /> */}
            </div>
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
