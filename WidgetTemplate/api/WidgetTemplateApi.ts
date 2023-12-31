import BaseApi from '../../../sdk/BaseApi';
import selectors from './WidgetTemplateSelectors';

export const ActionTypes = {
  WidgetTemplate_UPDATE_DATA: 'WidgetTemplate_UPDATE_DATA',
};
export default class WidgetTemplateApi extends BaseApi {
  updateData = (data: any) => {
    this.dispatchStoreAction(ActionTypes.WidgetTemplate_UPDATE_DATA, data);
  };

  getDataSelector = () => {
    return selectors.getDataSelector(this.store.getState());
  };
}
