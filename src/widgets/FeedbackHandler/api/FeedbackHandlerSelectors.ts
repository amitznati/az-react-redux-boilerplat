import { createSelector } from "reselect";
import config from "./FeedbackHandlerConfig";

const sliceSelector = (state: any) => state[config.sliceName];

export const getFeedbacksConfigSelector = createSelector(sliceSelector, (slice) => {
  return slice.feedbacksConfig;
});

export const getFeedbacksSelector = createSelector(sliceSelector, (slice) => {
  return slice.feedbacks;
});

const FeedbackHandlerSelectors = {
  getFeedbacksConfigSelector,
  getFeedbacksSelector
};

export default FeedbackHandlerSelectors;
