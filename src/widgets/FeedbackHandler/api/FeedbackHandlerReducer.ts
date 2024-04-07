import { ActionTypes } from "./FeedbackHandlerApi";
import {pushFeedbackPayloadType} from '../FeedbackHandler.types'
const initialState = {
  feedbacks: [] as pushFeedbackPayloadType[],
  feedbacksConfig: null,
};
// const SUCCESS = '_SUCCESS';
const reducer = (state = initialState, action: any) => {
  let newState = { ...state };
  const payload = action && action.payload;
  const type = action && action.type;
  switch (type) {
    case ActionTypes.FeedbackHandler_PUSH_FEEDBACK:
      newState = {
        ...state,
        feedbacks: [...state.feedbacks, payload],
      };
      break;
    case ActionTypes.FeedbackHandler_REMOVE_FEEDBACK:
      newState = {
        ...state,
        feedbacks: state.feedbacks.filter(f => f !== payload)
      };
      break;
    case ActionTypes.FeedbackHandler_UPDATE_CONFIG:
      newState = {
        ...state,
        feedbacksConfig: payload
      };
      break
    default:
      return newState;
  }
  return newState;
};

export default reducer;
