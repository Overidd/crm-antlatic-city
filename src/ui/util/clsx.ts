type ClassValue = string | boolean | undefined | null | Record<string, boolean>;

export const clsx = (...classes: ClassValue[]) => {
   return classes
      .flatMap(cls =>
         typeof cls === "object"
            ? Object.entries(cls || {})
               .filter(([, value]) => value)
               .map(([key,]) => key)
            : cls
      )
      .filter(Boolean)
      .join(" ");
}
