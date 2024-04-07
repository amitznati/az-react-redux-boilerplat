import BaseApi from '../../../sdk/BaseApi';
import selectors from "./FeedbackHandlerSelectors";
import { feedbackConfigType, IFeedbackHandlerApi, pushFeedbackPayloadType } from "../FeedbackHandler.types";

export const ActionTypes = {
  FeedbackHandler_UPDATE_CONFIG: "FeedbackHandler_UPDATE_CONFIG",
  FeedbackHandler_PUSH_FEEDBACK: "FeedbackHandler_PUSH_FEEDBACK",
  FeedbackHandler_REMOVE_FEEDBACK: "FeedbackHandler_REMOVE_FEEDBACK",
};
const loadConfig = async () => {
  // const response = await fetch(import.meta.env.VITE_API + '/assets/config/feedbacks_config.json');
  const config = import('../../../assets/config/feedbacks_config.json');
  return await config;
}

export default class FeedbackHandlerApi extends BaseApi implements IFeedbackHandlerApi {
  constructor(store: any, APIsInstances: any) {
    super(store, APIsInstances);
    loadConfig().then(config => {
      this.dispatchStoreAction(ActionTypes.FeedbackHandler_UPDATE_CONFIG, config);
    });
  }

  pushFeedback = (code: string, values?: {[x: string]: string}) => {
    this.dispatchStoreAction(ActionTypes.FeedbackHandler_PUSH_FEEDBACK, {code, values});
  }

  removeFeedback = (feedbackCode: string) => {
    this.dispatchStoreAction(ActionTypes.FeedbackHandler_REMOVE_FEEDBACK, feedbackCode);
  }

  getFeedbacksConfigSelector = (): feedbackConfigType[] => {
    return selectors.getFeedbacksConfigSelector(this.store.getState());
  }

  getFeedbacksSelector = (): pushFeedbackPayloadType[] => {
    return selectors.getFeedbacksSelector(this.store.getState());
  }
}
