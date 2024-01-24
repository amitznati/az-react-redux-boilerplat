import { BaseApi } from "@sdk";
import selectors from "./MainNavbarSelectors";

export const ActionTypes = {
  MainNavbar_UPDATE_DATA: "MainNavbar_UPDATE_DATA",
};
export default class MainNavbarApi extends BaseApi {
  updateData = (data: any) => {
    this.dispatchStoreAction(ActionTypes.MainNavbar_UPDATE_DATA, data);
  };

  getDataSelector = () => {
    return selectors.getDataSelector(this.store.getState());
  };
}
