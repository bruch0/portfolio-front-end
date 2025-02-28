export interface SkeletonArgs {
  className: string;
}

export const Skeleton = ({ className }: SkeletonArgs) => {
  return (
    <div className={`animate-pulse rounded-md bg-primary/10 ${className}`} />
  );
};
