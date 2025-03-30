
export interface IClient {
   id: number;
   avatar: string;
   username: string;
   firstName: string;
   email: string;
   country: string;
   totalExpenses: string;
   status: string;
   GamePreferences: string[]
}

export interface IClientPagination {
   prev: number | null,
   next: number | null,
   pages: number,
   items: number,
   currentPage?: number
}

export interface IClientAll {
   pagination: IClientPagination
   data: IClient[],
}

export interface IFilter {
   search: string,
   gamePreferences: string[],
   maxExpenses: number,
   minExpenses: number,
   status: string,
   location: string,
}


export interface IGetAll {
   page: number;
   limit: number;
   filter?: IFilter;
}