import { forwardRef, HTMLAttributes } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { IComponentBaseProps } from "../types";

export type SkeletonProps = HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {};

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ dataTheme, className, children, ...props }, ref) => {
    const classes = twMerge("skeleton", clsx({}), className);

    return (
      <div {...props} data-theme={dataTheme} className={classes} ref={ref}>
        {children}
      </div>
    );
  },
);

Skeleton.displayName = "Skeleton";

export default Skeleton;
