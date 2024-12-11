/***** All global types and interfaces are defined here *****/

import { ReactNode } from "react";

// Note: Define the Next childrens interface...!
export interface RootLayoutProps {
    children: ReactNode;
};

// Note: Define the Input state interface...!
export interface InputState {
    todoInput: string,
    id: string
};

// Note: Define the Todo state interface...!
export interface TodoState {
    todoData: InputState[]
};

// Note: Define the Update todo interface...!
export interface UpdateTodo {
    id: string
    newValue: string,
};

// Note: Define the Input props interface...!
export interface InputProps {
    inputValue: string,
    onChangeHandler: (value: string) => void
};

// Note: Define the Header props interface...!
export interface HeaderProps {
    heading: string
};