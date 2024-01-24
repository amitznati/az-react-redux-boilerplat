import { configureStore } from "@reduxjs/toolkit";
import widgets from "../widgets/widgetsApis";
import baseReducer from "./baseReducer";

let storeInstance: any;
const createStoreInstance = () => {
  const reducerMap: any = {};
  widgets.forEach((widget) => {
    reducerMap[widget.config.sliceName] = widget.reducer;
  });
  reducerMap.general = baseReducer;
  return configureStore({
    reducer: reducerMap,
  });
};
export const getStoreInstance = () => {
  if (!storeInstance) {
    storeInstance = createStoreInstance();
  }
  return storeInstance;
};

let instance: any;
const createInstance = () => {
  const apis: any = {};
  widgets.forEach((widget) => {
    const api: any = widget.api;
    apis[widget.config.apiName] = new api(getStoreInstance(), apis);
  });
  return apis;
};

export const getInstance = () => {
  if (!instance) {
    instance = createInstance();
  }
  return instance;
};

const instanceHandler = {
  getStoreInstance,
  getInstance,
};

export default instanceHandler;
