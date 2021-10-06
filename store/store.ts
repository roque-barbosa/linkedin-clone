import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./reducers/CombinedReducers";

const makeStore = () => {
  // Create store
  const store = createStore(reducers, composeWithDevTools());

  // Return store
  return store;
};

// export an assembled wrapper
export const storeWrapper = createWrapper(makeStore, { debug: false });