// Note: Main TodoList component...!

"use client";


import React, { FC, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import {
    addTodoAction,
    deleteTodoAction,
    updateTodoAction
} from '@/redux/actions/todo-actions/todo-actions';
import Input from '@/components/input/input';
import { InputState, UpdateTodo } from '@/types/types';

const TodoList: FC = () => {

    // Note: Handeling states here...!
    const [states, setStates] = useState<InputState>({
        todoInput: "",
        id: ""
    });
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [editKey, setEditKey] = useState<string>("");

    // Note: Handeling redux here...!
    const dispatch = useAppDispatch();

    const { todoData } = useAppSelector(({ todoStates }) => { return todoStates });
    // console.log("Todo states: ", todoData);

    // Note: Function to add todo item...!
    const addTodoHandler: () => void = () => {

        let isItemAlreadyExist: boolean = false;

        // Note: Handle validation...!
        if (states.todoInput.trim().length < 1) {
            console.log('Err: Input field is required!');
            return;
        };

        for (const item of todoData) {
            console.log('Array item: ', item);

            if (item.todoInput.trim().toLowerCase() == states.todoInput.trim().toLowerCase()) {
                isItemAlreadyExist = true
                break;
            };
        };

        if (isItemAlreadyExist) {
            console.log("Err: Item already exist!");
            return;
        };

        const obj: InputState = {
            todoInput: states.todoInput,
            id: nanoid() // Note: Generate a unique id...!
        };

        dispatch(addTodoAction(obj));
        setStates({
            todoInput: "",
            id: ""
        });
    };

    // Note: Function to delete todo item...!
    const deleteTodoHandler = (key: string) => {
        console.log("Index: ", key);
        key && dispatch(deleteTodoAction(key));
    };

    // Note: Function to edit todo item...!
    const editTodoHandler = (todoObj: InputState) => {
        console.log("Todo obj: ", todoObj);

        setStates({
            ...states,
            todoInput: todoObj.todoInput
        });
        setIsEdit(true);
        setEditKey(todoObj.id);
    };

    // Note: Function to update todo item...!
    const updateTodoHandler: () => void = () => {
        // Note: Handle validation...!
        if (states.todoInput.trim().length < 1) {
            console.log('Input field is required!');
            return;
        };

        const obj: UpdateTodo = {
            id: editKey,
            newValue: states.todoInput
        };
        dispatch(updateTodoAction(obj));
        setIsEdit(false);
        setEditKey("");
        setStates({
            todoInput: "",
            id: ""
        });
    };

    // Note: Function to cancel update todo item...!
    const cancelHandler: () => void = () => {
        setIsEdit(false);
        setEditKey("");
        setStates({
            todoInput: "",
            id: ""
        });
    };

    return (
        <div>
            {/* Note: Heading Section */}
            <h1> Todo List App using Next TS and Redux </h1>

            {/* Note: Form Section */}
            <div>
                <Input
                    inputValue={states.todoInput}
                    onChangeHandler={(value) => setStates({ ...states, todoInput: value })}
                />
                <div>
                    <button
                        // disabled={input.trim().length < 1}
                        onClick={isEdit ? updateTodoHandler : addTodoHandler}
                    >
                        {isEdit ? "Update Item" : "Add Item"}
                    </button>

                    {isEdit ? <button onClick={cancelHandler}> Cancel </button> : null}
                </div>
            </div>

            <ul>
                {
                    todoData && todoData.length > 0 ?
                        (
                            todoData?.map((item: { todoInput: string, id: string }) => {
                                return (
                                    <li key={item.id}>
                                        {item.todoInput}
                                        <button onClick={() => deleteTodoHandler(item.id)}> Delete Item </button>
                                        <button onClick={() => editTodoHandler(item)}> Edit Item </button>
                                    </li>
                                );
                            })
                        )
                        : null
                }
            </ul>
        </div>
    );
};

export default TodoList;