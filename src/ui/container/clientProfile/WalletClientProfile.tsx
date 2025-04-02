import { IClientProfile } from "@/domain/interface";

interface AddressClientProfileProps {
   profile: IClientProfile;
   className?: string;
}

export const WalletClientProfile = ({ profile }: AddressClientProfileProps) => {
   const {
      totalExpenses,
      totalWithdrawals,
      totalDeposits,
      availableBalance,
      totalBonuses,
      totalPromotions,
      pendingPayment,
   } = profile
   return (
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
         <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-7 2xl:gap-x-32">
            {
               Object.entries({ 'Gasto Total': totalExpenses, 'Depositos': totalDeposits, 'Retiros': totalWithdrawals, 'Saldo Disponible': availableBalance, 'Total Bonos': totalBonuses, 'Total Promociones': totalPromotions, 'Pagos Pendientes': pendingPayment }).map(([key, value], index) => (
                  <div key={index}>
                     <span className='text-primary-light-100'>{key}</span>
                     <p className='text-primary-light-200'>
                        S/ {value}
                     </p>
                  </div>
               ))
            }
         </div>
      </div>
   )

}
