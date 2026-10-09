import { HTMLAttributes, ReactNode } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export default function Container({ className = "", children, ...rest }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-5 md:px-[4.5%] ${className}`} {...rest}>
      {children}
    </div>
  );
}
