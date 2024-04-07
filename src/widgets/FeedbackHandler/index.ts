
import FeedbackHandlerApi from "./api/FeedbackHandlerApi";
import FeedbackHandlerReducer from "./api/FeedbackHandlerReducer";
import FeedbackHandlerConfig from "./api/FeedbackHandlerConfig";
import { IFeedbackHandlerApi as TIFeedbackHandlerApi  } from "./FeedbackHandler.types";
import { WidgetType } from "../types";

export type IFeedbackHandlerApi = TIFeedbackHandlerApi;
export const widget: WidgetType  = {
  api: FeedbackHandlerApi,
  reducer: FeedbackHandlerReducer,
  config: FeedbackHandlerConfig,
};

export default widget;
