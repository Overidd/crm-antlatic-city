import { useState } from "react";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownItem } from "../dropdown/DropdownItem";
import { Link } from "react-router";
import { Bell } from "lucide-react";

export default function NotificationDropdown() {
   const [isOpen, setIsOpen] = useState(false);
   const [notifying, setNotifying] = useState(true);

   function toggleDropdown() {
      setIsOpen(!isOpen);
   }

   function closeDropdown() {
      setIsOpen(false);
   }

   const handleClick = () => {
      toggleDropdown();
      setNotifying(false);
   };
   return (
      <div className="relative">
         <button
            className="relative flex items-center justify-center text-secondary-light-200 transition-colors bg-tertiary-light-100 rounded-full h-11 w-11 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={handleClick}
         >
            <span
               className={`absolute right-0 top-0.5 z-10 h-2 w-2 rounded-full bg-orange-400 ${!notifying ? "hidden" : "flex"
                  }`}
            >
               <span className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
            </span>
            <Bell className="fill-current" />
         </button>
         <Dropdown
            isOpen={isOpen}
            onClose={closeDropdown}
            className="absolute -right-[240px] mt-[17px] flex h-[480px] w-[350px] flex-col rounded-2xl bg-tertiary-light-200 shadow-md shadow-tertiary-light-400 p-3 sm:w-[361px] lg:right-0"
         >
            <ul className="flex flex-col h-auto overflow-y-auto custom-scrollbar">
               {/* Example notification items */}
               <li>
                  <DropdownItem
                     onItemClick={closeDropdown}
                     className="flex gap-3 rounded-lg text-primary-light-200"
                  >
                     <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                        <img
                           width={40}
                           height={40}
                           src="./user/userDefault.png"
                           alt="User"
                           className="w-full overflow-hidden rounded-full"
                        />
                        <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
                     </span>

                     <span className="block">
                        <span className="mb-1.5 block text-theme-sm space-x-1">
                           <span className="font-medium">
                              Andres
                           </span>
                           <span>Tarea</span>
                           <span className="font-medium">
                              1
                           </span>
                        </span>

                        <span className="flex items-center gap-2">
                           <span>Proyecto</span>
                           <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                           <span>5 min ago</span>
                        </span>
                     </span>
                  </DropdownItem>
               </li>

               <li>
                  <DropdownItem
                     onItemClick={closeDropdown}
                     className="flex gap-3 rounded-lg text-primary-light-200"
                  >
                     <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                        <img
                           width={40}
                           height={40}
                           src="/user/userDefault.png"
                           alt="User"
                           className="w-full overflow-hidden rounded-full"
                        />
                        <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
                     </span>

                     <span className="block">
                        <span className="mb-1.5 block text-theme-sm space-x-1">
                           <span className="font-medium">
                              Andres
                           </span>
                           <span>Tarea 2</span>
                           <span className="font-medium">
                              2
                           </span>
                        </span>

                        <span className="flex items-center gap-2">
                           <span>Proyecto</span>
                           <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                           <span>7 min ago</span>
                        </span>
                     </span>
                  </DropdownItem>
               </li>

               {/* <li>
                  <DropdownItem
                     onItemClick={closeDropdown}
                     className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
                     href="/"
                  >
                     <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                        <img
                           width={40}
                           height={40}
                           src="/images/user/user-05.jpg"
                           alt="User"
                           className="w-full overflow-hidden rounded-full"
                        />
                        <span className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-error-500 dark:border-gray-900"></span>
                     </span>

                     <span className="block">
                        <span className="mb-1.5 block text-theme-sm text-gray-500 dark:text-gray-400 space-x-1">
                           <span className="font-medium text-gray-800 dark:text-white/90">
                              Brandon Philips
                           </span>
                           <span> requests permission to change</span>
                           <span className="font-medium text-gray-800 dark:text-white/90">
                              Project - Nganter App
                           </span>
                        </span>

                        <span className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                           <span>Project</span>
                           <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                           <span>1 hr ago</span>
                        </span>
                     </span>
                  </DropdownItem>
               </li> */}

               {/* Add more items as needed */}
            </ul>
            <Link
               to="/"
               className="mt-auto block px-4 py-2 text-sm font-medium text-center text-primary-light-200 bg-secondary-light-300 rounded-lg"
            >
               Ver todas las notificaciones
            </Link>
         </Dropdown>
      </div>
   );
}
