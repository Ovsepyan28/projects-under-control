import { Middleware, applyMiddleware, createStore } from "redux";

import { rootReducer } from "./reducers/rootReducer";

const localStorageMiddleware: Middleware =
    ({ getState }) =>
    (next) =>
    (action) => {
        const result = next(action);
        const state = getState() as RootState;
        localStorage.setItem("projects", JSON.stringify(state.projects));
        return result;
    };

export const store = createStore(rootReducer, applyMiddleware(localStorageMiddleware));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
