import { ApisType } from "../widgets/types";

type serviceRequestOptionsType = {
  ignoreSpinner?: boolean;
  feedbackOptions?: {
    successCode?: string;
    successValues?: any;
    errorCode?: string;
    errorValues?: any;
  };
};

interface IBaseApi {
  store: any;
  APIsInstances: ApisType;
  dispatchStoreAction: (type: string, payload: any) => void;
  startSpinner: (spinnerId: string, options: any) => void;
  stopSpinner: (spinnerId: string, options: any) => void;
  serviceRequest: (
    serviceMethod: any,
    payload: any,
    actionType?: string,
    getSuccessPayload?: (res: any) => any,
    getErrorPayload?: (err: any) => any,
    options?: serviceRequestOptionsType
  ) => Promise<any>;
}

export default class BaseApi implements IBaseApi {
  store: any;
  APIsInstances: ApisType;
  constructor(store: any, APIsInstances: any) {
    this.store = store.store;
    this.APIsInstances = APIsInstances;
  }

  dispatchStoreAction = (type: string, payload: any) => {
    this.store.dispatch({ type, payload });
  };

  private spinnerAction = (isOn: boolean, options: any, spinnerId: string) => {
    this.dispatchStoreAction("SPINNER_ACTION", { isOn, options, spinnerId });
  };
  startSpinner = (spinnerId: string, options: any) =>
    this.spinnerAction(true, options, spinnerId);
  stopSpinner = (spinnerId: string, options: any) =>
    this.spinnerAction(false, options, spinnerId);

  serviceRequest = async (
    serviceMethod: any,
    payload: any,
    actionType = '',
    getSuccessPayload = (res: any) => {
      return res.data;
    },
    getErrorPayload = (err: any) => {
      return err;
    },
    options: serviceRequestOptionsType = {}
  )  => {
    const requestType = `${actionType}_REQUEST`;
    const successType = `${actionType}_SUCCESS`;
    const failureType = `${actionType}_FAILURE`;
    if (actionType) {
      this.dispatchStoreAction(requestType, payload);
      if (!options.ignoreSpinner) {
        this.startSpinner(requestType, {});
      }
    }
    try {
      const res = await serviceMethod(payload);
      const serviceRequestResponse = await Promise.resolve(
        getSuccessPayload(res),
      );
      if (actionType) {
        this.dispatchStoreAction(successType, serviceRequestResponse);
        if (!options.ignoreSpinner) {
          this.stopSpinner(requestType, {});
        }
        if (options.feedbackOptions?.successCode) {
          this.APIsInstances.FeedbackHandlerApi.pushFeedback(
            options.feedbackOptions.successCode,
            options.feedbackOptions.successValues,
          );
        }
      }
      return serviceRequestResponse;
    } catch (err) {
      console.error(err);
      const serviceRequestErr = await Promise.resolve(getErrorPayload(err));
      this.dispatchStoreAction(failureType, serviceRequestErr);
      if (!options.ignoreSpinner && actionType) {
        this.stopSpinner(requestType, {});
      }
      if (options.feedbackOptions?.errorCode) {
        this.APIsInstances.FeedbackHandlerApi.pushFeedback(
          options.feedbackOptions.errorCode,
          options.feedbackOptions.errorValues,
        );
      }
      throw serviceRequestErr;
    }
  };
}
