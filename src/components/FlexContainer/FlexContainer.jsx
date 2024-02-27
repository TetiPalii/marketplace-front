import { cn } from "@/lib/utils";

export const FlexContainer = ({ className, children }) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {children}
    </div>
  );
};
