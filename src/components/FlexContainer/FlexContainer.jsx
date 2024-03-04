import { cn } from "@/lib/utils";

export const FlexContainer = ({ className, children }) => {
  return (
    <div className={cn("flex items-center", className)}>
      {children}
    </div>
  );
};
