import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
