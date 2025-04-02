import { Trash } from 'lucide-react';
import { Button } from '@/ui/components/ui';
import { IClientProfile } from '@/domain/interface';
import { ComponentCard2 } from '@/ui/components/ui/card';

interface UserMetaCardProps {
   profile: IClientProfile;
   className?: string;
}

export const MetaCardClientPofile = ({ profile }: UserMetaCardProps) => {
   const { avatar, username, age, gender } = profile;
   return (
      <ComponentCard2
         title=""
         className="p-5 shadow-md shadow-tertiary-light-300 rounded-2xl"
      >
         <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
               <figure className="w-20 h-20 overflow-hidden rounded-full">
                  <img src={avatar} alt={`Avatar of ${username}`} />
               </figure>
               <div className="space-y-2 text-center xl:text-left">
                  <h4 className="text-lg font-semibold text-center text-primary-light-200 xl:text-left">
                     {username}
                  </h4>
                  <p className="text-primary-light-200/70 text-sm space-x-2">
                     {age} Años
                  </p>
                  <p className="text-secondary-light-200 font-bold uppercase text-sm">
                     {gender}
                  </p>
               </div>
            </div>
            <Button
               className='max-w-fit text-primary-light-200 mx-auto'
               label="Eliminar"
               startIcon={<Trash />}
               variant="error"
            />
         </div>
      </ComponentCard2>
   );
}
