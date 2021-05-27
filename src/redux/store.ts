import { Action, applyMiddleware, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import reducer from "./reducers/reducer";

type RootReducerType = typeof reducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// window.__store__ = store
