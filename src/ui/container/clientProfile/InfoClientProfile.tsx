import { Edit2 } from 'lucide-react';
import { Button } from '@/ui/components/ui';
import { IClientProfile } from '@/domain/interface';
import { ModalTrigger } from '@/ui/components/ui/modal';

interface UserInfoCardProps {
   profile: IClientProfile;
   className?: string;
}

export const InfoClientProfile = ({ profile }: UserInfoCardProps) => {
   const { firstName, lastName, email, phone, age, country } = profile

   return (
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
         <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            {
               Object.entries({ Nombre: firstName, Apellido: lastName, Telefono: phone, Email: email, Edad: age, Pais: country }).map(([key, value], index) => (
                  <div key={index}>
                     <span className='text-primary-light-100'>{key}</span>
                     <p className='text-primary-light-200'>
                        {value}
                     </p>
                  </div>
               ))
            }
         </div>
         <ModalTrigger.Open
            idModal="modal-edit-infoClientProfile"
         >
            <Button
               className="max-w-fit"
               label="Editar"
               startIcon={<Edit2 />}
               variant="primary"
            />
         </ModalTrigger.Open>
      </div>
   );
}