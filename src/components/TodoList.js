import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList ,setTodoList,filter}) => {

    return (
        <div className="todo-container">
        <ul className="todo-list">
            {filter.map((todo) => (
                <Todo todoList={todoList} setTodoList={setTodoList} text={todo.text} key={todo.id} todo={todo}   />
            ))}
        </ul>
        </div>
    );
    };

export default TodoList;
