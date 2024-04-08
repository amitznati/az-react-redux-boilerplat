import React, { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { IComponentBaseProps, ComponentColor } from "../types";
import { useNavigate } from "react-router-dom";

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  IComponentBaseProps & {
    color?: "neutral" | ComponentColor;
    hover?: boolean;
    to?: string;
  };

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { children, href, color, hover = true,
      dataTheme, className, to, ...props },
    ref,
  ) => {
    const navigate = useNavigate();
    const classes = twMerge(
      "link",
      className,
      clsx({
        "link-neutral": color === "neutral",
        "link-primary": color === "primary",
        "link-secondary": color === "secondary",
        "link-accent": color === "accent",
        "link-info": color === "info",
        "link-success": color === "success",
        "link-warning": color === "warning",
        "link-error": color === "error",
        "link-hover": hover,
      }),
    );

    return (
      <a
        rel="noopener noreferrer"
        {...props}
        href={href}
        data-theme={dataTheme}
        className={classes}
        ref={ref}
        onClick={() => to && navigate(to)}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = "Link";

export default Link;
