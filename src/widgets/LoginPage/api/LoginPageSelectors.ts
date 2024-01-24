import { createSelector } from "reselect";
import config from "./LoginPageConfig";

const sliceSelector = (state: any) => state[config.sliceName];

export const getUserSelector = createSelector(sliceSelector, (slice) => {
  return slice.user;
});

const LoginPageSelectors = {
  getUserSelector,
};

export default LoginPageSelectors;
