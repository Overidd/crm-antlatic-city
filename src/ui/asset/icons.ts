import { Mail, LockKeyhole, LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type TIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>

export type TIconsOptions = 'email' | 'password'

export type TIcons = {
   email: TIcon,
   password: TIcon,
}
export const IconComponent: TIcons = {
   email: Mail,
   password: LockKeyhole,

}