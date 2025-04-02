
export interface IClientProfile {
   id: number;
   avatar: string;
   username: string;
   firstName: string;
   lastName: string;
   country: string;
   email: string;
   city?: string;
   phone?: string;
   status: string;
   gender: string;
   age?: string;
   GamePreferences: string[]

   totalExpenses: number;
   totalWithdrawals: number;
   totalDeposits: number;
   availableBalance: number;
   totalBonuses: number;
   totalPromotions: number;
   pendingPayment: number;
}
