/***** Main reducer configuration *****/

import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todo-reducer/todo-reducer";

const rootReducer = combineReducers({
    todoStates: todoReducer
});

export default rootReducer;