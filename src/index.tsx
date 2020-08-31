import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/font.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-instrument";
import { reducers } from "./store";
import { Provider } from "react-redux";
import { initialData } from "./store/reducers/initialData";
declare global {
  interface Window {
    gapi: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialData,
  composeEnhancers(applyMiddleware(...middleWare))
);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
