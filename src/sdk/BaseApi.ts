export default class BaseApi {
  protected store: any;
  private APIsInstances: any;
  constructor(store: any, APIsInstances: any) {
    this.store = store;
    this.APIsInstances = APIsInstances;
  }

  dispatchStoreAction = (type: string, payload: any) => {
    this.store.dispatch({type, payload});
  };

  spinnerAction = (isOn: boolean, options: any, spinnerId: string) => {
    this.dispatchStoreAction('SPINNER_ACTION',{isOn, options, spinnerId});
  };
  startSpinner = (spinnerId: string, options: any) =>
    this.spinnerAction(true, options, spinnerId);
  stopSpinner = (spinnerId: string, options: any) =>
    this.spinnerAction(false, options, spinnerId);

  getServiceRequestType = (type: string) => `${type}_REQUEST`;
  getServiceSuccessType = (type: string) => `${type}_SUCCESS`;
  getServiceFailureType = (type: string) => `${type}_FAILURE`;

  serviceRequest = async (
    serviceMethod: any,
    payload: any,
    actionType: string,
    getSuccessPayload = (res: any) => {
      return res.data;
    },
    getErrorPayload = (err: any) => {
      return err;
    },
  ) => {
    const requestType = this.getServiceRequestType(actionType);
    const successType = this.getServiceSuccessType(actionType);
    const failureType = this.getServiceFailureType(actionType);
    this.dispatchStoreAction(requestType, payload);
    try {
      const res = await serviceMethod(payload);
      const serviceRequestResponse = await Promise.resolve(
        getSuccessPayload(res),
      );
      this.dispatchStoreAction(successType, serviceRequestResponse);
      return serviceRequestResponse;
    } catch (err) {
      const serviceRequestErr = await Promise.resolve(getErrorPayload(err));
      this.dispatchStoreAction(failureType, serviceRequestErr);
      throw serviceRequestErr;
    }
  };
}
