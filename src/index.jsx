import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import { AuthProvider } from "./contexts/AuthContext";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter basename="/crips-react/">
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <App />
          </Provider>
        </PersistGate>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
