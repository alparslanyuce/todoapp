import React from 'react'
import {useToDo} from "../../../Contexts/ToDoContext"

function Item({todo}) {

  const {ToggleToDo,destroyToDo}= useToDo();

  const onChange = (id)=> ToggleToDo(id);

  const onDestroy =(id)=>destroyToDo(id);

  

  return (
    <li key={todo.id} className={todo.completed ? "completed": ""}>
                <div className="view">
                    <input 
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                    />
                    <label>
                        {todo.text}
                    </label>
                    <button className="destroy" onClick={()=>onDestroy(todo.id)}></button>
                    </div>
            </li>
  );
}

export default Item
