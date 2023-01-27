import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MainContext, MainContextProvider } from "./context/mainContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <MainContextProvider>
         <App />
      </MainContextProvider>
   </React.StrictMode>
);