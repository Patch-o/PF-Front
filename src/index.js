import React, {Component} from "react";
import { createContext } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import "./index.scss";
//import {ThemeProvider} from "./context/themes/themeContext"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<ThemeProvider>
  <Provider store={store}>
    <Router>
    
    <App />
    
    </Router>
  </Provider>
  //</ThemeProvider>
);
