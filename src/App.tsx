import Pages from "./pages";
import { MainLoader } from "./widgets";
import "./styles.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import { getStoreInstance } from "@sdk";
import AuthProvider from "./hooks/AuthProvider";

function App() {
  const { store, persistor } = getStoreInstance();
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading</div>} persistor={persistor}>
        <AuthProvider>
          <Pages />
          <MainLoader />
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
