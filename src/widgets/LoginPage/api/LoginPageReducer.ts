import { ActionTypes } from "./LoginPageApi";
const initialState: {
  user: {
    username: string,
    email: string,
    fullName: string,
    id: string,
  } | null
  loginForm: {
    username: string
    password: string
  }
} = {
  user: null,
  loginForm: {username: '', password: ''}
};
const SUCCESS = '_SUCCESS';
const reducer = (state = initialState, action: any) => {
  let newState = { ...state };
  const payload = action && action.payload;
  const type = action && action.type;
  switch (type) {
    case `${ActionTypes.LoginPage_LOGIN}${SUCCESS}`:
      console.log('Login Success!', payload);
      newState = {
        ...state,
        user: {...payload},
      };
    break;
    default:
      return newState;
  }
  return newState;
};

export default reducer;
