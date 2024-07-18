import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const ProductLable = ({
  inputName,
  children,
  className,
  htmlFor
}: {
  children?: ReactNode;
  inputName: string;
    className?: string;
  htmlFor?:string
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("flex flex-col gap-y-2 text-formColor ", className)}
    >
      {inputName} {children}
    </label>
  );
};
