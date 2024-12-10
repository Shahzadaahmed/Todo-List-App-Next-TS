// Note: TodoReducer...!

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState, InputState, UpdateTodo } from "@/types/types";

// Note: Reducer states...!
const initialState: TodoState = {
    todoData: []
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<InputState>) => {
            // console.log("Todo value in action: ", action.payload);

            const todoClone: InputState[] = [...state.todoData];
            todoClone.push(action.payload);
            state.todoData = todoClone;
        },

        deleteTodo: (state, action: PayloadAction<string>) => {
            // console.log("Todo key in reducer: ", action.payload);

            const targetIndex: number = [...state.todoData].findIndex((item: InputState) => { return item.id == action.payload });
            // console.log('El index: ', targetIndex);
            state.todoData.splice(targetIndex, 1);
        },

        updateTodo: (state, action: PayloadAction<UpdateTodo>) => {
            // console.log("Updated data in reducer: ", action.payload);

            const targetIndex: number = [...state.todoData].findIndex((item: InputState) => { return item.id == action.payload.id });
            // console.log('El index: ', targetIndex);

            state.todoData.splice(targetIndex, 1, { id: action.payload.id, todoInput: action.payload.newValue });
        }
    }
});

export const {
    addTodo,
    deleteTodo,
    updateTodo
} = todoSlice.actions;
export default todoSlice.reducer;