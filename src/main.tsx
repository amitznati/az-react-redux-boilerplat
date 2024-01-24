import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { PersistGate } from 'redux-persist/integration/react'
import App from "./App.jsx";
import { getStoreInstance } from "@sdk";

const { store, persistor } = getStoreInstance();

ReactDOM.createRoot(document.getElementById("root") as any).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<div>Loading</div>} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
