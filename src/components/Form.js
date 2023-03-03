import React from "react";

const Form = ({ setToDo, setTodoList, todoList, toDo,setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setToDo(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { text: toDo, completed: false, id: Math.random() }
    ]);
    setToDo("");
  };
  const statusHandler =(e) =>{
    console.log(e.target.value);
    setStatus(e.target.value);
  }
  return (
    <form>
      <input
        value={toDo}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      ></input>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todo" className="filter-todo">
          <option value="all"> All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
