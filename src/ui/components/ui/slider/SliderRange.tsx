import { useState, useRef, useEffect } from "react"

interface SliderRangeProps {
   min: number
   max: number
   step?: number
   defaultMin?: number
   defaultMax?: number
   onChange?: (min: number, max: number) => void
   formatValue?: (value: number) => string
   className?: string
   currency?: string
}

export const SliderRange: React.FC<SliderRangeProps> = ({
   min,
   max,
   step = 1,
   defaultMin = min,
   defaultMax = max,
   onChange,
   formatValue,
   className = '',
   currency = 'S/',
}) => {
   const [minValue, setMinValue] = useState(defaultMin)
   const [maxValue, setMaxValue] = useState(defaultMax)
   const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null)

   const trackRef = useRef<HTMLDivElement>(null)
   const minThumbRef = useRef<HTMLDivElement>(null)
   const maxThumbRef = useRef<HTMLDivElement>(null)

   // Format the price with the currency symbol and thousands separator
   const formatPrice = (value: number): string => {
      if (formatValue) return formatValue(value)
      return `${currency}${value.toLocaleString()}`
   }

   // Calculate the percentage position for a value
   const getPercentage = (value: number): number => {
      return ((value - min) / (max - min)) * 100
   }

   // Calculate the value from a percentage position
   const getValueFromPosition = (percentage: number): number => {
      const rawValue = (percentage / 100) * (max - min) + min
      const steppedValue = Math.round(rawValue / step) * step
      return Math.min(Math.max(steppedValue, min), max)
   }

   // Handle mouse/touch down on thumbs
   const handleThumbDown = (thumb: 'min' | 'max') => (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault()
      setIsDragging(thumb)
   }

   // Handle mouse/touch move
   const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !trackRef.current) return

      const track = trackRef.current
      const trackRect = track.getBoundingClientRect()

      // Get clientX from either mouse or touch event
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX

      // Calculate percentage
      let percentage = ((clientX - trackRect.left) / trackRect.width) * 100
      percentage = Math.min(Math.max(percentage, 0), 100)

      // Calculate new value
      const newValue = getValueFromPosition(percentage)

      // Update the appropriate value
      if (isDragging === 'min') {
         if (newValue <= maxValue - step) {
            setMinValue(newValue)
         }
      } else {
         if (newValue >= minValue + step) {
            setMaxValue(newValue)
         }
      }
   }

   // Handle mouse/touch up
   const handleUp = () => {
      if (isDragging) {
         setIsDragging(null)

         // Notify parent component of change
         if (onChange) {
            onChange(minValue, maxValue)
         }
      }
   }

   // Add and remove event listeners
   useEffect(() => {
      if (isDragging) {
         document.addEventListener('mousemove', handleMove)
         document.addEventListener('touchmove', handleMove)
         document.addEventListener('mouseup', handleUp)
         document.addEventListener('touchend', handleUp)
      }

      return () => {
         document.removeEventListener('mousemove', handleMove)
         document.removeEventListener('touchmove', handleMove)
         document.removeEventListener('mouseup', handleUp)
         document.removeEventListener('touchend', handleUp)
      }
   }, [isDragging, minValue, maxValue])

   // Notify parent component of initial values
   useEffect(() => {
      if (onChange) {
         // onChange(minValue, maxValue)
      }
   }, [])

   // Handle input changes
   const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number.parseInt(e.target.value, 10)
      if (!isNaN(value) && value >= min && value <= maxValue - step) {
         setMinValue(value)
         if (onChange) {
            onChange(minValue, maxValue)
         }
      }
   }

   const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number.parseInt(e.target.value, 10)
      if (!isNaN(value) && value <= max && value >= minValue + step) {
         setMaxValue(value)
         if (onChange) {
            onChange(minValue, maxValue)
         }
      }
   }

   // Calculate positions
   const minPercentage = getPercentage(minValue)
   const maxPercentage = getPercentage(maxValue)

   return (
      <div className={`w-full ${className}`}>

         <div className="relative h-12 w-full flex items-center">
            {/* Track background */}
            <div ref={trackRef} className="absolute w-full h-2 bg-tertiary-light-200 rounded-full">
               {/* Selected range */}
               <div
                  className="absolute h-full bg-secondary-light-200 rounded-full"
                  style={{
                     left: `${minPercentage}%`,
                     width: `${maxPercentage - minPercentage}%`,
                  }}
               />

               {/* Min thumb */}
               <div
                  ref={minThumbRef}
                  className={`absolute top-1/2 -translate-y-1/2 -ml-3 w-5 h-5 bg-secondary-light-200 rounded-full shadow-md cursor-pointer ${isDragging === "min" ? "ring-2 ring-secondary-light-200" : ""}`}
                  style={{ left: `${minPercentage}%` }}
                  onMouseDown={handleThumbDown("min")}
                  onTouchStart={handleThumbDown("min")}
                  role="slider"
                  aria-valuemin={min}
                  aria-valuemax={max}
                  aria-valuenow={minValue}
                  tabIndex={0}
               >
               </div>

               {/* Max thumb */}
               <div
                  ref={maxThumbRef}
                  className={`absolute top-1/2 -translate-y-1/2 -ml-3 w-5 h-5 bg-secondary-light-200 rounded-full shadow-md cursor-pointer ${isDragging === "max" ? "ring-2 ring-secondary-light-200" : ""}`}
                  style={{ left: `${maxPercentage}%` }}
                  onMouseDown={handleThumbDown("max")}
                  onTouchStart={handleThumbDown("max")}
                  role="slider"
                  aria-valuemin={min}
                  aria-valuemax={max}
                  aria-valuenow={maxValue}
                  tabIndex={0}
               >
               </div>
            </div>
            {/* Price labels */}
            <div className="bottom-[-10%] absolute w-full flex justify-between">
               <div className="text-xs text-gray-400">{formatPrice(min)}</div>
               <div className="text-xs text-gray-400">{formatPrice(max)}</div>
            </div>
         </div>

         <div className="flex justify-start gap-4 mt-3">
            <div className="relative">
               <label htmlFor="min-price" className="block text-sm font-medium text-primary-light-300 mb-1">
                  Minimo
               </label>
               <input
                  id="min-price"
                  type="text"
                  value={minValue}
                  onChange={handleMinInputChange}
                  className="w-24 px-3 py-2 bg-tertiary-light-200 border border-tertiary-light-200 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-tertiary-light-100"
               />
            </div>
            <div className="relative">
               <label htmlFor="max-price" className="block text-sm font-medium text-primary-light-300 mb-1">
                  Maximo
               </label>
               <input
                  id="max-price"
                  type="text"
                  value={maxValue}
                  onChange={handleMaxInputChange}
                  className="w-24 px-3 py-2 bg-tertiary-light-200 border border-tertiary-light-200 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-tertiary-light-100"
               />
            </div>
         </div>
      </div>
   )
}

