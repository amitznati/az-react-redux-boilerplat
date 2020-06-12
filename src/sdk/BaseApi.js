export default class BaseApi {
  constructor(store, APIsInstances) {
    this.store = store;
    this.APIsInstances = APIsInstances;
  }

  dispatchStoreAction = (type, payload) => {
    this.store.dispatch({type, payload});
  };

  spinnerAction = (isOn, options, spinnerId) => {
    this.dispatchStoreAction('SPINNER_ACTION',{isOn, options, spinnerId});
  };
  startSpinner = (spinnerId, options) =>
    this.spinnerAction(true, options, spinnerId);
  stopSpinner = (spinnerId, options) =>
    this.spinnerAction(false, options, spinnerId);

  getServiceRequestType = type => `${type}_REQUEST`;
  getServiceSuccessType = type => `${type}_SUCCESS`;
  getServiceFailureType = type => `${type}_FAILURE`;

  serviceRequest = async (
    serviceMethod,
    payload,
    actionType,
    getSuccessPayload = res => {
      return res.data;
    },
    getErrorPayload = err => {
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
