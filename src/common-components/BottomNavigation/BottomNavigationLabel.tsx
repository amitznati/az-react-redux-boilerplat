import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type BottomNavigationLabelProps = React.HTMLAttributes<HTMLSpanElement>;

const BottomNavigationLabel = forwardRef<
  HTMLSpanElement,
  BottomNavigationLabelProps
>(({ children, className, ...props }, ref) => {
  const classes = twMerge("btm-nav-label", className);
  return (
    <span {...props} className={classes} ref={ref}>
      {children}
    </span>
  );
});

export default BottomNavigationLabel;
