import {
   IClient,
   IClientAll,
   IFilter,
   IGetAll
} from '@/domain/interface';

export class ClientApi {
   private clients: IClient[];

   constructor() {
      this.clients = [];
   }

   public getAll = async ({ page, limit, filter }: IGetAll): Promise<IClientAll> => {
      const res = await fetch(`${import.meta.env.VITE_URL_API}/clients`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      this.clients = await res.json();

      this.applyFilter(filter);
      const pagination = this.applyPagination(page, limit);

      return {
         data: this.clients,
         pagination,
      };
   };

   private applyFilter = (filter?: IFilter) => {
      if (!filter || Object.keys(filter).length === 0) return;

      const gamePreferencesSet = new Set(filter.gamePreferences?.map((game) => game.toLowerCase()) || []);

      this.clients = this.clients.filter((item) => {

         const searchLower = filter.search?.toLowerCase() || "";
         const matchesSearch = (searchLower)
            ? (item.email.toLowerCase().includes(searchLower) ||
               item.firstName.toLowerCase().includes(searchLower))
            : true

         // item.lastName?.toLowerCase().includes(searchLower));

         const matchesGamePreferences =
            (gamePreferencesSet.size > 0)
               ? item.GamePreferences.some((game) => gamePreferencesSet.has(game.toLowerCase()))
               : true;

         const totalExpenses = parseInt(item.totalExpenses, 10) || 0;

         const matchesExpenses =
            (filter.minExpenses == null || totalExpenses >= filter.minExpenses) &&
            (filter.maxExpenses == null || totalExpenses <= filter.maxExpenses);

         const matchesStatus = filter.status ? item.status.toLowerCase() === filter.status.toLowerCase() : true;
         const matchesLocation = filter.location ? item.city.toLowerCase() === filter.location.toLowerCase() : true;

         return (
            matchesSearch &&
            matchesGamePreferences &&
            matchesExpenses &&
            matchesStatus &&
            matchesLocation
         );
      });

   };

   private applyPagination = (page: number, limit: number) => {
      page = Math.max(1, page); // Asegura que no sea menor a 1
      const skip = (page - 1) * limit;
      const totalPages = Math.ceil(this.clients.length / limit);
      const next = page + 1 <= totalPages ? page + 1 : null;
      const prev = page - 1 >= 1 ? page - 1 : null;
      const items = this.clients.length;

      this.clients = this.clients.slice(skip, skip + limit);

      return {
         currentPage: page,
         pages: totalPages,
         next,
         prev,
         items,
      };
   };
}