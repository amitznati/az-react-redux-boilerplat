import { createSelector } from "reselect";
import config from "./MainNavbarConfig";

const sliceSelector = (state: any) => state[config.sliceName];

export const getDataSelector = createSelector(sliceSelector, (slice) => {
  return slice.data;
});

const MainNavbarSelectors = {
  getDataSelector,
};

export default MainNavbarSelectors;
