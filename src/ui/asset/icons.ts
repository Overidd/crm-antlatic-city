import { Mail, LockKeyhole, LucideProps, User, Search  } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type TIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>

export type TIconsOptions = 'email' | 'password' | 'user' | 'search'





export type TIcons = {
   email: TIcon,
   password: TIcon,
   user: TIcon,
   search: TIcon,
}


export const IconComponent: TIcons = {
   email: Mail,
   password: LockKeyhole,
   user: User,
   search: Search,
}