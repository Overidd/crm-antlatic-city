import { useClientProfile } from '@/presentation/hook';
import { PageBreadCrumb } from '@/ui/components/ui/common';
import { useParams } from 'react-router-dom';
import {
   UserInfoCard,
   UserMetaCard
} from '@/ui/container/UserProfile';

export const ClientProfile = () => {
   const { id } = useParams();
   const { client } = useClientProfile(id);

   console.log(client);

   return (
      <div>
         <PageBreadCrumb pageTitle="Profile" />
         <div className="rounded-2xl border border-transparent bg-tertiary-light-200 text-primary-light-200 p-5 lg:p-6">
            <h3 className="mb-5 text-lg font-semibold text-primary-light-200 lg:mb-7">
               Personal Information
            </h3>
            <div className="space-y-6">
               <UserMetaCard profile={client} />
               <UserInfoCard profile={client}/>
               {/* <UserAddressCard profile={client}/> */}
            </div>
         </div>
      </div>
   )
}
