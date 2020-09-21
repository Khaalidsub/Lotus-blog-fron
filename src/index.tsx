import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/font.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./store";
import { Provider } from "react-redux";
import { initialData } from "./store/reducers/initialData";
import { BrowserRouter as Router } from "react-router-dom";
declare global {
  interface Window {
    gapi: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const middleWare = [thunk];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialData,
  applyMiddleware(...middleWare)
  // composeEnhancers(applyMiddleware(...middleWare))
);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
