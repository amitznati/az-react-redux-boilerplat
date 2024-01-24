import React from "react";

import Theme from "../../src/common-components/Theme";
import { useGlobalTheme } from "../theming";

export const DocsWrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = useGlobalTheme();
  return <Theme dataTheme={theme}>{children}</Theme>;
};
