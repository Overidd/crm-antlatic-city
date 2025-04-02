import { clsx } from "@/ui/util"
import { useEffect, useState } from "react"



interface toastCardProps {
  className?: string
  children: React.ReactNode,
}
export const ToastCard = ({ className, children }: toastCardProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={clsx(
        "w-fit h-11 fixed bottom-7 right-2 md:right-[4rem] flex justify-end items-center gap-4",
        "transform transition-all duration-300 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  )
}
