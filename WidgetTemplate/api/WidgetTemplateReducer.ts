import {ActionTypes} from './WidgetTemplateApi';
const initialState = {
  data: [],
};
// const SUCCESS = '_SUCCESS';
const reducer = (state = initialState, action: any) => {
  let newState = {...state};
  const payload = action && action.payload;
  const type = action && action.type;
  switch (type) {
  case ActionTypes.WidgetTemplate_UPDATE_DATA:
    newState = {
      ...state,
      data: {...payload},
    };
    break;
  default:
    return newState;
  }
  return newState;
};

export default reducer;
