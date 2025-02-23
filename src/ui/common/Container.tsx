import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`text-xs mx-auto max-w-7xl flex flex-col gap-4 lg:flex-row justify-between ${className}`}>
      {children}
    </div>
  );
};

