/***** Main reducer configuration *****/

import { combineReducers } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import todoReducer from "./todo-reducer/todo-reducer";

// Note: Persist reducer configuration...!
// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: ['todoStates']
// }

const rootReducer = combineReducers({
    todoStates: todoReducer
});

export default rootReducer;

// Note: If you ae using Redux persist then uncommit this => // export default persistReducer(persistConfig, rootReducer);