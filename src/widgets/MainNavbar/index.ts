import MainNavbarApi from "./api/MainNavbarApi";
import MainNavbarReducer from "./api/MainNavbarReducer";
import MainNavbarConfig from "./api/MainNavbarConfig";
import MainNavbarComponent from "./widget/MainNavbar.component";

export const widget = {
  api: MainNavbarApi,
  reducer: MainNavbarReducer,
  config: MainNavbarConfig,
  component: MainNavbarComponent,
};

export default widget;
