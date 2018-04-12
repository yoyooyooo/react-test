import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import Routes from "./components/Route/Routes";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
