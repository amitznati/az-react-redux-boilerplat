import WidgetTemplateApi from "./api/WidgetTemplateApi";
import WidgetTemplateReducer from "./api/WidgetTemplateReducer";
import WidgetTemplateConfig from "./api/WidgetTemplateConfig";
import WidgetTemplateComponent from "./widget/WidgetTemplate.component";

export const widget = {
  api: WidgetTemplateApi,
  reducer: WidgetTemplateReducer,
  config: WidgetTemplateConfig,
  component: WidgetTemplateComponent,
};

export default widget;
