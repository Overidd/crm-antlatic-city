interface CardSkeletonProps {
   className?: string
   roundedClassName?: string
   bgClassName?: string
   skeletonHeader?: number
   quantityItem?: number
}

export const CardSkeleton = ({
   className,
   roundedClassName = 'rounded-xl',
   bgClassName = 'bg-gray',
   skeletonHeader = 0,
   quantityItem = 1
}: CardSkeletonProps) => {
   const heightHeader = 100 - skeletonHeader
   const height = heightHeader / quantityItem
   return (
      <div className={`animate-pulse overflow-hidden space-y-1 ${roundedClassName} ${className}`}>
         {
            skeletonHeader > 0 &&
            <div
               className={`w-full ${roundedClassName} ${bgClassName}`}
               style={{ height: `${100 - heightHeader}%` }}
            ></div>
         }
         {
            Array.from({ length: quantityItem }).map((_, index) => (
               <div
                  key={index}
                  className={`w-full ${roundedClassName} ${bgClassName}`}
                  style={{ height: `${height}%` }}
               ></div>
            ))
         }
      </div >
   )
}
