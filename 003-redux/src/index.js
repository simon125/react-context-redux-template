import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";

/**
 *
 * https://redux-toolkit.js.org/api/configureStore#parameters
 * ZADANIE DODAJ REDUXOWY PROVIDER I PRZEKARZ W PROPSACH REFERENCJE DO STORA
 *
 *
 */

import "@picocss/pico";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
