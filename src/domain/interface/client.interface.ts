
export interface IClient {
   id: number;
   avatar: string;
   username: string;
   firstName: string;
   email: string;
   city: string;
   totalExpenses: string;
   GamePreferences: string[]
}

export interface IClientPagination {
   first: number,
   prev: number,
   next: number,
   last: number,
   pages: number,
   items: number,
   currentPage?: number
}

export interface IClientAll {
   pagination: IClientPagination
   data: IClient[],
}