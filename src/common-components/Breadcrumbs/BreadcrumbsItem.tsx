import React from "react";

export type BreadcrumbsItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  href?: string;
};

const BreadcrumbsItem = React.forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  ({ children, href, ...props }, ref) => {
    return (
      <li role="link" {...props} ref={ref}>
        {href ? <a href={href}>{children}</a> : <>{children}</>}
      </li>
    );
  },
);

export default BreadcrumbsItem;
