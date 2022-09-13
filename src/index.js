import React, { Component } from "react";
import { createContext } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import "./index.scss";
import TranslationWrapper from "./lang/translations/Translation";
//import {ThemeProvider} from "./context/themes/themeContext" //<ThemeProvider>//</ThemeProvider>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TranslationWrapper>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </TranslationWrapper>
);
