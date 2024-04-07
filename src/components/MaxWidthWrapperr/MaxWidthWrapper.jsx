import { cn } from '@/lib/utils';

export const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div className={cn('w-full px-6 py-4 md:py-3', className)}>{children}</div>
  );
};
