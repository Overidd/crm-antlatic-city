import { useClientProfile } from '@/presentation/hook';
import { PageBreadCrumb } from '@/ui/components/ui/common';
import { ComponentCard } from '@/ui/components/ui/card';
import { useParams } from 'react-router-dom';
import {
   InfoClientProfile,
   MetaCardClientPofile,
   ModalInfoClientProfile,
   TabsClientPofile,
   WalletClientProfile,
} from '@/ui/container/clientProfile';

export const ClientProfile = () => {
   const { id } = useParams();
   const { client } = useClientProfile(id);

   if (Object.keys(client).length === 0) {
      return (
         <>
            <PageBreadCrumb pageTitle="Profile" />
            <ComponentCard
               title='Perfil'
               className='flex flex-col justify-center items-center'
            >
               <h3 className="text-xl font-semibold text-primary-light-200">
                  Seleciona un cliente
               </h3>
               <figure className='min-w-[15rem] md:w-[30rem]'>
                  <img
                     className="mx-auto"
                     src="/svg/peopleSearch.svg"
                     alt="Empty"
                  />
               </figure>
            </ComponentCard>
         </>
      );
   }

   return (
      <>
         <PageBreadCrumb pageTitle="Profile" />
         <ComponentCard
            title='Perfil'
         >
            <MetaCardClientPofile
               profile={client}
            />

            <TabsClientPofile
               headerTitle={['información', 'Wallet']}
               bodyNode={[
                  <InfoClientProfile
                     profile={client}
                  />,
                  <WalletClientProfile
                     profile={client}
                  />
               ]}
            />
            <ModalInfoClientProfile
               profile={client}
            />
         </ComponentCard>
      </>
   )
}