import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

import "@picocss/pico";
import { LectureContextProvider } from "./contexts/LectureContext";
import { ShoppingCartContextProvider } from "./contexts/ShoppingCartContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <LectureContextProvider>
      <ShoppingCartContextProvider>
        <App />
        <ToastContainer />
      </ShoppingCartContextProvider>
    </LectureContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
