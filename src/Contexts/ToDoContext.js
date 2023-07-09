import React, {createContext, useContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const ToDoContext = createContext();

export const ToDoProvider =({children}) => {
const [filter,setFilter]=useState('All');
const [todos, setTodos]=useState([]);
const addToDo = (text) =>
    setTodos((prev)=>[...prev,{id:uuidv4(),completed:false,text}]);

const ToggleToDo=(id)=>{
    const cloned_todos= [...todos];

    const itemIndex = cloned_todos.findIndex((todo) => todo.id ===id);
    const item = todos[itemIndex];
    item.completed =!item.completed;
    
    setTodos(cloned_todos);
};

const destroyToDo =(id)=> {
    const cloned_todos = [...todos];

    const itemIndex = cloned_todos.findIndex((todo) => todo.id ===id);
    cloned_todos.splice(itemIndex,1);

    setTodos(cloned_todos);
    

  };

const values ={
    todos,
    setTodos,
    addToDo,
    ToggleToDo,
    destroyToDo,
    filter,
    setFilter
};

return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export const useToDo = () =>{
    const context = useContext(ToDoContext);

    if(context===undefined){
        throw new Error("useToDo hook ToDoProvider componenti içinde çağrılmalıdır");
    }

    return context;
};