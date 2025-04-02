import { ComponentCard2 } from '@/ui/components/ui/card';
import { Button, Input } from '@/ui/components/ui';
import { IClientProfile } from '@/domain/interface';
import { Modal } from '@/ui/components/ui/modal';
import { useForm } from '@/ui/hook';


interface ModalInfoClientProfileProps {
   profile: IClientProfile;
}

export const ModalInfoClientProfile = ({
   profile
}: ModalInfoClientProfileProps) => {
   const {
      onSubmitForm,
      onInputChange,
      formState,
   } = useForm({
      initialState: {
         name: profile.firstName,
         lastName: profile.lastName,
         email: profile.email,
         phone: profile.phone || ''
      }
   });

   const onSubmit = onSubmitForm((e) => {
      console.log(e);
   })

   return (
      <Modal
         idModal="modal-edit-infoClientProfile"
      >
         <ComponentCard2
            title="Editar Informacion Personal"
            alignTitle="text-center"
            className='space-y-8'
         >
            <form
               onSubmit={onSubmit}
               className="flex flex-col gap-4"
            >
               <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <Input
                     type="text"
                     label='Nombre'
                     variant='filled'
                     name='name'
                     value={formState.name}
                     onChange={onInputChange}
                  />
                  <Input
                     type="text"
                     label='Apellido'
                     variant='filled'
                     name='lastName'
                     value={formState.lastName}
                     onChange={onInputChange}
                  />
                  <Input
                     type="text"
                     label='Email'
                     variant='filled'
                     name='email'
                     value={formState.email}
                     onChange={onInputChange}
                  />
                  <Input
                     type="text"
                     label='telefono'
                     variant='filled'
                     name='phone'
                     value={formState.phone}
                     onChange={onInputChange}
                  />
               </div>
               <Button
                  label="Guardar"
                  size="sm"
                  onClick={() => console.log('save')}
               />
            </form>
         </ComponentCard2>
      </Modal>
   )
}
