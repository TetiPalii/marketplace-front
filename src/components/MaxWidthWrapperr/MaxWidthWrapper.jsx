import { cn } from "@/lib/utils";

export const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6  py-2 md:px-72",
        className
      )}
    >
      {children}
    </div>
  );
};
