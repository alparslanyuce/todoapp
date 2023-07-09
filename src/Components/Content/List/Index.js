import React from "react"
import { useToDo } from "../../../Contexts/ToDoContext";
import Item from "./Item";

let filtered= null;

function List() {

    const {todos, filter} = useToDo();

    filtered=todos;

    if(filter !== "All") {
      filtered = todos.filter((todo) => filter === "Active" ? todo.completed === false : todo.completed === true 
      );
    }

  return (
    <ul className="todo-list">
        {filtered.map((todo) =>(
            <Item key={todo.id} todo={todo} />
        ))}
        </ul>
  );
        
}

export default List;
