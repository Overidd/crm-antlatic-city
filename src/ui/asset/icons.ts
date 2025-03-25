import { Mail, LockKeyhole, LucideProps, User  } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type TIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>

export type TIconsOptions = 'email' | 'password' | 'user'





export type TIcons = {
   email: TIcon,
   password: TIcon,
   user: TIcon,
}


export const IconComponent: TIcons = {
   email: Mail,
   password: LockKeyhole,
   user: User

}