import React from "react";

interface WidgetTemplateMainViewProps {
  className?: string;
}

export default function WidgetTemplateMainView(
  props: WidgetTemplateMainViewProps,
) {
  return <div {...props}>main view</div>;
}
