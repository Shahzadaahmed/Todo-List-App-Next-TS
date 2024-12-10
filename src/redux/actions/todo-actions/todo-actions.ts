// Note: All todo action functions are defined here...!

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    addTodo,
    deleteTodo,
    updateTodo
} from "@/redux/reducers/todo-reducer/todo-reducer";
import { InputState, UpdateTodo } from "@/types/types";

// Note: Action function to add todo item...!
const addTodoAction = createAsyncThunk(
    "todo/addTodo",
    (inputData: InputState, { dispatch }) => {
        // console.log("Input data in action: ", inputData);

        // Note: For saving data in reducer...!
        dispatch(addTodo(inputData));
        return null;
    }
);

// Note: Action function to delete todo item...!
const deleteTodoAction = createAsyncThunk(
    "todo/deleteTodo",
    (key: string, { dispatch }) => {
        // console.log("Todo key in action: ", key);

        dispatch(deleteTodo(key));
        return null;
    }
);

// Note: Action function to update todo item...!
const updateTodoAction = createAsyncThunk(
    "todo/updateTodo",
    (obj: UpdateTodo, { dispatch }) => {
        // console.log("Updated data in action: ", obj);

        dispatch(updateTodo(obj));
        return null;
    }
);

export {
    addTodoAction,
    deleteTodoAction,
    updateTodoAction
};