import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import widgets from "../widgets/widgetsApis";
import baseReducer from "./baseReducer";

let storeInstance: any;
interface WidgetType {
  config: {
    persist: object;
    sliceName: string;
    apiName: string;
  };
  reducer: any;
  api: any;
}
const reducerMap: any = {};
const persistSlices: string[] = [];
(widgets as Array<WidgetType>).forEach((widget) => {
  if (widget.config.persist) {
    reducerMap[widget.config.sliceName] = persistReducer(
      {
        key: widget.config.sliceName,
        version: 1,
        storage,
        ...widget.config.persist,
      },
      widget.reducer,
    );
    persistSlices.push(widget.config.sliceName);
  } else {
    reducerMap[widget.config.sliceName] = widget.reducer;
  }
});
reducerMap.general = baseReducer;
const createStoreInstance = () => {
  const reducers = combineReducers(reducerMap);
  const resettableRootReducer = (
    state:
      | { [x: string]: unknown }
      | Partial<{ [x: string]: unknown }>
      | undefined,
    action: { type: any },
  ) => {
    if (action.type === "@@RESET_STORE") {
      Promise.all(
        persistSlices.map(async (slice) => {
          return storage.removeItem(`persist:${slice}`);
        }),
      );
      return reducers(undefined, action);
    }
    return reducers(state, action);
  };

  const store = configureStore({
    reducer: resettableRootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  let persistor = persistStore(store);
  return { store, persistor };
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
