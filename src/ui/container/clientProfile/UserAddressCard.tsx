import { IClientProfile } from "@/domain/interface";
import { Button, Input } from "@/ui/components/ui";
import { Modal } from "@/ui/components/ui/modal";
import { Edit2 } from "lucide-react";


interface UserAddressCardProps {
  profile: IClientProfile;
  className?: string;
}
export const UserAddressCard = ({ profile }: UserAddressCardProps) => {
  const { avatar, username, firstName, lastName, gender } = profile;
  return (
    <>
      <div className="p-5 shadow-md shadow-tertiary-light-300  rounded-2xl lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="mb-2 text-lg font-semibold text-center text-primary-light-200 xl:text-left">
              Information 
            </h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="text-primary-light-200/70 mb-2 text-xs leading-normal">
                  Country
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  United States
                </p>
              </div>

              <div>
                <p className="text-primary-light-200/70 mb-2 text-xs leading-normal">
                  City/State
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  Phoenix, Arizona, United States
                </p>
              </div>

              <div>
                <p className="text-primary-light-200/70 mb-2 text-xs leading-normal">
                  Postal Code
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  ERT 2489
                </p>
              </div>

              <div>
                <p className="text-primary-light-200/70 mb-2 text-xs leading-normal">
                  TAX ID
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  AS4568384
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
      {/* <ModalAddress /> */}
    </>
  );
}


export const ModalAddress = () => {
  return (
    <Modal
      idModal="edit-address-modal"
      className="max-w-[700px] m-4"
    >
      <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Edit Address
          </h4>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
            Update your details to keep your profile up-to-date.
          </p>
        </div>
        <form className="flex flex-col">
          <div className="px-2 overflow-y-auto custom-scrollbar">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
              <div>
                <label>Country</label>
                <Input type="text" value="United Kingdom" />
              </div>

              <div>
                <label>City/State</label>
                <Input type="text" value="Leeds, East London" />
              </div>

              <div>
                <label>Postal Code</label>
                <Input type="text" value="ERT 2489" />
              </div>

              <div>
                <label>TAX ID</label>
                <Input type="text" value="AS4568384" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
            <Button
              label="Cancel"
              size="sm"
              variant="outline"
              onClick={() => console.log("close modal")}
            />
            <Button
              label="Save changes"
              size="sm"
              onClick={() => console.log("save changes")}
            />
          </div>
        </form>
      </div>
    </Modal>
  )
}