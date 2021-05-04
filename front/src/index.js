import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store"
import App from "./containers/App"
import "./index.css";

const Main = () => {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default render(<Main />, document.getElementById("root"));


















