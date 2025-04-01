import { IClientProfile } from "@/domain/interface";
import { Button } from "@/ui/components/ui";
// import { Modal } from "@/ui/components/ui/modal";
import { Edit2 } from "lucide-react";

interface UserMetaCardProps {
   profile: IClientProfile;
   className?: string;
}

export const UserMetaCard = ({ profile }: UserMetaCardProps) => {
   const { avatar, username, firstName, lastName, gender } = profile;
   return (
      <>
         <div className="p-5 shadow-md shadow-tertiary-light-300  rounded-2xl lg:p-6">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
               <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
                  <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
                     <img src={avatar} alt={`Avatar of ${username}`} />
                  </div>
                  <div className="order-3 xl:order-2">
                     <h4 className="mb-2 text-lg font-semibold text-center text-primary-light-200 xl:text-left">
                        {username}
                     </h4>
                     <div className="font-medium flex flex-col items-center gap-2 text-center xl:flex-row xl:gap-3 xl:text-left">
                        <p className="text-primary-light-200/70 text-sm space-x-2">
                           <span>{firstName}</span>
                           <span>{lastName}</span>
                        </p>
                        <p className="text-secondary-light-200 uppercase text-sm">
                           {gender}
                        </p>
                     </div>
                  </div>
               </div>
               <Button
                  className="max-w-fit"
                  label="Editar"
                  startIcon={<Edit2 />}
                  variant="primary"
               />
            </div>
         </div>
         {/* <Modal
            idModal="edit-profile-modal-3"
            className="max-w-[700px] m-4"
         >
            <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
               <div className="px-2 pr-14">
                  <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                     Edit Personal Information
                  </h4>
                  <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                     Update your details to keep your profile up-to-date.
                  </p>
               </div>
               <form className="flex flex-col">
                  <div className="custom-scrollbar h-[450px] pb-3 overflow-y-auto px-2">
                     <div>
                        <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                           Social Links
                        </h5>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                           <div>
                              <label>Facebook</label>
                              <Input
                                 type="text"
                                 value="https://www.facebook.com/PimjoHQ"
                              />
                           </div>

                           <div>
                              <label>X.com</label>
                              <Input type="text" value="https://x.com/PimjoHQ" />
                           </div>

                           <div>
                              <label>Linkedin</label>
                              <Input
                                 type="text"
                                 value="https://www.linkedin.com/company/pimjo"
                              />
                           </div>

                           <div>
                              <label>Instagram</label>
                              <Input type="text" value="https://instagram.com/PimjoHQ" />
                           </div>
                        </div>
                     </div>
                     <div className="mt-7">
                        <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                           Personal Information
                        </h5>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                           <div className="col-span-2 lg:col-span-1">
                              <label>First Name</label>
                              <Input type="text" value="Musharof" />
                           </div>

                           <div className="col-span-2 lg:col-span-1">
                              <label>Last Name</label>
                              <Input type="text" value="Chowdhury" />
                           </div>

                           <div className="col-span-2 lg:col-span-1">
                              <label>Email Address</label>
                              <Input type="text" value="randomuser@pimjo.com" />
                           </div>

                           <div className="col-span-2 lg:col-span-1">
                              <label>Phone</label>
                              <Input type="text" value="+09 363 398 46" />
                           </div>

                           <div className="col-span-2">
                              <label>Bio</label>
                              <Input type="text" value="Team Manager" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                     <Button
                        label="Cancel"
                        size="sm"
                        variant="outline"
                        onClick={() => console.log('cancel')}
                     />
                     <Button
                        label="Save"
                        size="sm"
                        onClick={() => console.log('save')}
                     />
                  </div>
               </form>
            </div>
         </Modal> */}
      </>
   );
}
