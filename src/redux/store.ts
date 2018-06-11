import { createStore, compose, combineReducers, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
const { reducer } = require("@brigad/redux-rest-easy");

declare global {
  interface IWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const combinedReducers = combineReducers({ reducer });

const win = window as IWindow;
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof win === "object" &&
  win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify here name, actionsBlacklist, actionsCreators and other options
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // applyMiddleware(...middleware),
  // other store enhancers if any
);

const store: Store<{}> = createStore(combinedReducers, enhancer);

export default store;
