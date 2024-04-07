import LoginPageApi, {ILoginPageApi as TILoginPageApi} from "./api/LoginPageApi";
import LoginPageReducer from "./api/LoginPageReducer";
import LoginPageConfig from "./api/LoginPageConfig";
import { WidgetType } from "../types";

export type ILoginPageApi = TILoginPageApi;
export const widget: WidgetType = {
  api: LoginPageApi,
  reducer: LoginPageReducer,
  config: LoginPageConfig,
};

export default widget;
