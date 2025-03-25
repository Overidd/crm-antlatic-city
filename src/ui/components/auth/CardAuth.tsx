

interface ICardAuthProp {
   children: React.ReactNode
}

export const CardAuth = ({ children }: ICardAuthProp) => {
   return (
      <article
         className="lg:w-[80%] rounded-[45px] shadow-2xl bg-tertiary-light-100 text-white space-y-5 mx-auto p-12"
      >
         <figure className="w-2/4 bg-secondary-light-200/70 rounded-full mx-auto">
            <img
               className="opacity-60 w-full mix-blend-screen"
               src="/user/iconUser.png"
               alt="Icon User"
            />
         </figure>
         <section>
            {children}
         </section>
      </article>
   )
}
