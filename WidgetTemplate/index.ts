import {types} from '@sdk';
import WidgetTemplateApi, {IWidgetTemplateApi as TIWidgetTemplateApi} from "./api/WidgetTemplateApi";
import WidgetTemplateReducer from "./api/WidgetTemplateReducer";
import WidgetTemplateConfig from "./api/WidgetTemplateConfig";

export type IWidgetTemplateApi = TIWidgetTemplateApi;
export const widget: types.WidgetType = {
  api: WidgetTemplateApi,
  reducer: WidgetTemplateReducer,
  config: WidgetTemplateConfig,
};

export default widget;
