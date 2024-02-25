import { cn } from "@/lib/utils";

export const FlexContainer = ({ className, children }) => {
  return (
    <div className={cn("flex items-center place-content-between", className)}>
      {children}
    </div>
  );
};
