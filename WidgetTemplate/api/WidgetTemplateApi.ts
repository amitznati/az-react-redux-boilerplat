import {BaseApi} from '@sdk';
import selectors from "./WidgetTemplateSelectors";

export const ActionTypes = {
  WidgetTemplate_UPDATE_DATA: "WidgetTemplate_UPDATE_DATA",
};
export interface IWidgetTemplateApi {
  updateData: (data: any) => void;
  getDataSelector: () => any;
}
export default class WidgetTemplateApi extends BaseApi implements IWidgetTemplateApi {
  updateData = (data: any) => {
    this.dispatchStoreAction(ActionTypes.WidgetTemplate_UPDATE_DATA, data);
  };

  getDataSelector = () => {
    return selectors.getDataSelector(this.store.getState());
  };
}
