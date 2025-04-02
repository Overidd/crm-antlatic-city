import { useState } from 'react';
import { DropdownItem } from '../dropdown/DropdownItem';
import { Dropdown } from '../dropdown/Dropdown';
import { useAuth } from '@/presentation/hook';
import { Link } from 'react-router';
import { CircleAlert, CircleUser, LogOut, Settings } from 'lucide-react';

export default function UserDropdown() {
   const [isOpen, setIsOpen] = useState(false);
   const { displayName, email, photoURL, logout } = useAuth();

   function toggleDropdown() {
      setIsOpen(!isOpen);
   }

   function closeDropdown() {
      setIsOpen(false);
   }
   return (
      <div className="relative">
         <button
            onClick={toggleDropdown}
            className="flex items-center dark:text-gray-400"
         >
            <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
               <img
                  src={photoURL || 'user/iconUser.png'}
                  alt="User"
               />
            </span>

            <span className="block mr-1 font-medium text-secondary-light-200">{displayName}</span>

            <svg
               className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                  }`}
               width="18"
               height="20"
               viewBox="0 0 18 20"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
            </svg>
         </button>

         <Dropdown
            isOpen={isOpen}
            onClose={closeDropdown}
            className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl bg-tertiary-light-200 text-primary-light-200 p-3 shadow-md shadow-tertiary-light-300"
         >
            <div>
               <span className="text-primary-light-200 block font-medium text-theme-sm">
                  {displayName}
               </span>
               <span className="text-primary-light-200 mt-0.5 block text-theme-xs">
                  {email}
               </span>
            </div>

            <ul className="flex flex-col gap-1 pt-4 pb-3 border-b">
               <li>
                  <DropdownItem
                     onItemClick={closeDropdown}
                     tag="a"
                     href="/profile"
                     className="text-primary-light-200 flex items-center gap-3 px-3 py-2 font-medium"
                  >
                     <CircleUser />
                     Editar Perfil
                  </DropdownItem>
               </li>
               <li>
                  <DropdownItem
                     onItemClick={closeDropdown}
                     tag="a"
                     href="/profile"
                     className="text-primary-light-200 flex items-center gap-3 px-3 py-2 font-medium"
                  >
                     <Settings />
                     Ajustes
                  </DropdownItem>
               </li>
               <li>
                  <DropdownItem
                     onItemClick={closeDropdown}
                     tag="a"
                     href="/profile"
                     className="text-primary-light-200 flex items-center gap-3 px-3 py-2 font-medium"
                  >
                     <CircleAlert />
                     Soporte
                  </DropdownItem>
               </li>
            </ul>
            <Link
               to="/signin"
               className="text-primary-light-200 flex items-center gap-3 px-3 py-2 mt-3 font-medium"
               onClick={logout}
            >
               <LogOut className='rotate-180' />
               Cerrar Sesión
            </Link>
         </Dropdown>
      </div>
   );
}
