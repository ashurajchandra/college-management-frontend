import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { configureStore } from "./store/index";
import App from "./components/App";
import { Provider } from "react-redux";

const store = configureStore();
console.log("store", store);
console.log("props", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
