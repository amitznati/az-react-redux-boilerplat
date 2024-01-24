import { createSelector } from "reselect";
import config from "./WidgetTemplateConfig";

const sliceSelector = (state: any) => state[config.sliceName];

export const getDataSelector = createSelector(sliceSelector, (slice) => {
  return slice.data;
});

const WidgetTemplateSelectors = {
  getDataSelector,
};

export default WidgetTemplateSelectors;
