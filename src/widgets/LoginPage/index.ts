import LoginPageApi from "./api/LoginPageApi";
import LoginPageReducer from "./api/LoginPageReducer";
import LoginPageConfig from "./api/LoginPageConfig";
import LoginPageComponent from "./widget/LoginPage.component";

export const widget = {
  api: LoginPageApi,
  reducer: LoginPageReducer,
  config: LoginPageConfig,
  component: LoginPageComponent,
};

export default widget;
