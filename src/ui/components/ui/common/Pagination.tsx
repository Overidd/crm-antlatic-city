import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { clsx } from '@/ui/util/clsx';
import { useMemo } from 'react';

interface PaginationProps {
   currentPage: number
   totalPages: number
   onPageChange: (page: number) => void
   siblingCount?: number
   className?: string
}

export const Pagination = ({ currentPage, totalPages, onPageChange, siblingCount = 1, className }: PaginationProps) => {
   // Función para generar el rango de páginas a mostrar
   const paginationRange = useMemo(() => {
      // Función auxiliar para crear un array con rango [start, end]
      const range = (start: number, end: number) => {
         const length = end - start + 1
         return Array.from({ length }, (_, idx) => idx + start)
      }

      const totalPageNumbers = siblingCount * 2 + 5 // first + last + current + 2*siblings + 2 ellipsis

      // Caso: número de páginas menor que el total de números a mostrar
      if (totalPageNumbers >= totalPages) {
         return range(1, totalPages)
      }

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

      const shouldShowLeftDots = leftSiblingIndex > 2
      const shouldShowRightDots = rightSiblingIndex < totalPages - 2

      // Caso 1: mostrar elipsis a la derecha
      if (!shouldShowLeftDots && shouldShowRightDots) {
         const leftItemCount = 3 + 2 * siblingCount
         const leftRange = range(1, leftItemCount)
         return [...leftRange, -1, totalPages]
      }

      // Caso 2: mostrar elipsis a la izquierda
      if (shouldShowLeftDots && !shouldShowRightDots) {
         const rightItemCount = 3 + 2 * siblingCount
         const rightRange = range(totalPages - rightItemCount + 1, totalPages)
         return [1, -2, ...rightRange]
      }

      // Caso 3: mostrar elipsis en ambos lados
      if (shouldShowLeftDots && shouldShowRightDots) {
         const middleRange = range(leftSiblingIndex, rightSiblingIndex)
         return [1, -2, ...middleRange, -1, totalPages]
      }

      return []
   }, [currentPage, totalPages, siblingCount])

   if (currentPage === 0 || paginationRange.length < 2) {
      return null
   }

   const onNext = () => {
      if (currentPage < totalPages) {
         onPageChange(currentPage + 1)
      }
   }

   const onPrevious = () => {
      if (currentPage > 1) {
         onPageChange(currentPage - 1)
      }
   }

   return (
      <nav
         className={clsx("flex items-center justify-between space-x-1", className)}
         aria-label="Navegación de paginación"
      >
         <PaginationButton
            onClick={onPrevious}
            disabled={currentPage === 1}
            aria-label="anterior"
            className='bg-tertiary-light-200 space-x-2 px-4'
         >
            <ChevronLeft className="h-4 w-4" />
            <span>Prev</span>
         </PaginationButton>

         <section className='mx-auto flex items-center'>
            {paginationRange.map((pageNumber, index) =>
               (pageNumber < 0)
                  ? (
                     <span
                        key={`ellipsis-${pageNumber}-${index}`}
                        className="text-primary-light-200 flex h-9 w-9 items-center justify-center text-sm"
                     >
                        <MoreHorizontal className="h-4 w-4" />
                     </span>
                  )
                  : (
                     <PaginationButton
                        key={`page-${pageNumber}`}
                        onClick={() => onPageChange(pageNumber)}
                        active={pageNumber === currentPage}
                        aria-label={`Ir a la página ${pageNumber}`}
                        aria-current={pageNumber === currentPage ? "page" : undefined}
                     >
                        {pageNumber}
                     </PaginationButton>
                  )
            )}
         </section>

         <PaginationButton
            onClick={onNext}
            disabled={currentPage === totalPages}
            aria-label="Siguiente"
            className='bg-tertiary-light-200 space-x-2 px-4'
         >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
         </PaginationButton>
      </nav>
   )
}

interface PaginationButtonProps {
   children: React.ReactNode;
   active?: boolean;
   disabled?: boolean;
   onClick: () => void;
   className?: string;
   'aria-label'?: string;
   'aria-current'?: 'page' | undefined;
}

const PaginationButton = ({
   children,
   active = false,
   disabled = false,
   onClick,
   className,
   'aria-label': ariaLabel,
   'aria-current': ariaCurrent,
}: PaginationButtonProps) => {
   return (
      <button
         onClick={onClick}
         disabled={disabled}
         aria-label={ariaLabel}
         aria-current={ariaCurrent}
         className={clsx("flex min-h-9 min-w-9 items-center justify-center rounded-md text-sm transition-colors",
            className,
            (active)
               ? "bg-tertiary-light-300 text-secondary-light-200 font-medium"
               : "bg-transparent text-primary-light-200 hover:bg-primary-light-900/20",
            disabled && "pointer-events-none opacity-50",
         )}
      >
         {children}
      </button>
   )
}

