

interface ICardAuthProp {
   children: React.ReactNode
}

export const CardAuth = ({ children }: ICardAuthProp) => {
   return (
      <article
         className="lg:w-[80%] rounded-[45px] shadow-2xl bg-color-purple-light text-white space-y-5 mx-auto p-12"
      >
         <section>
            <img
               className="opacity-20 w-2/4 mx-auto mix-blend-screen"
               src="/user/iconUser.png"
               alt="Icon User"
            />
         </section>
         <section>
            {children}
         </section>
      </article>
   )
}
