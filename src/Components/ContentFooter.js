import React from 'react'
import {useToDo} from "../Contexts/ToDoContext";

function ContentFooter() {
	const {todos, filter,setTodos, setFilter} = useToDo();

	const clearCompleted = () => {
		setTodos((prev) => prev.filter((todo) => !todo.completed ));
	};

  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{todos.length} </strong>
			item{todos.length > 1 && "s"} left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" onClick={()=>setFilter('All')} className={filter ==="All" ? "selected" : ""}>All</a>
			</li>
			<li>
				<a href="#/" onClick={()=>setFilter('Active')} className={filter ==="Active" ? "selected" : ""}>Active</a>
			</li>
			<li>
				<a href="#/" onClick={()=>setFilter('Completed')}className={filter ==="Completed" ? "selected" : ""}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={clearCompleted}>
			Clear completed
		</button>
	</footer>
  )
}

export default ContentFooter
