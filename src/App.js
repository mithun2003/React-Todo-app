// import React, { useState,useEffect } from "react";
// import "./App.css";
// import Form from "./components/Form";
// import TodoList from "./components/TodoList";
// import { useLocalStorageState } from 'use-local-storage-state';


// function App() {
//   const [toDo, setToDo] = useState("");
//   const [todoList, setTodoList] = useState([]);
  
//   const [status,setStatus]=useState('all');
//   const [filter, setFilter] = useState([]);

//   useEffect(() => {
//      getLocalTodos();
//   }, []);

//   useEffect(() => {
//     filterHandler();
//     saveLocalTodos();
//   }, [todoList,status]);


//   const filterHandler = () => {
//      switch(status){
//       case "completed":
//         setFilter(todoList.filter((todo) => todo.completed===true))
//         break;
//       case "uncompleted":
//         setFilter(todoList.filter((todo) => todo.completed===false))
//         break;
//       default:
//         setFilter(todoList);
//         break;
//      }
//   }

//   // const saveLocalTodos = () => {
//   //     localStorage.setItem("todoList",JSON.stringify(todoList));
//   // };

//   // const getLocalTodos = () => {
//   //   if (localStorage.getItem("todoList") === null){
//   //     localStorage.setItem("todoList",JSON.stringify([]));
//   //   } else{
//   //     let todoLocal = JSON.parse(localStorage.getItem("todoList"));
//   //     console.log(todoLocal)
//   //     setTodoList(todoLocal);
//   //   }
//   // };


//   const saveLocalTodos = () => {
//     try {
//       localStorage.setItem("todoList", JSON.stringify(todoList));
//     } catch (e) {
//       console.error("Error saving data to local storage:", e);
//     }
//   };

//   const getLocalTodos = () => {
//     try {
//       const storedData = localStorage.getItem("todoList");
//       if (storedData !== null) {
//         localStorage.setItem("todoList", JSON.stringify([]));
//       } else {
//         const todoLocal = JSON.parse(storedData);
//         setTodoList(todoLocal);
//       }
//     } catch (e) {
//       console.error("Error retrieving data from local storage:", e);
//     }
//   };


//   return (
//     <div className="App">
//       <header>
//         <h1>ToDo</h1>
//       </header>
//       <Form
//         toDo={toDo}
//         todoList={todoList}
//         setTodoList={setTodoList}
//         setToDo={setToDo}
//         setStatus={setStatus}
//       />
//       <TodoList filter={filter} todoList={todoList} setTodoList={setTodoList} />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [toDo, setToDo] = useState("");
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  const [todoList, setTodoList] = useLocalStorageState("todoList", []);

  useEffect(() => {
    filterHandler();
  }, [todoList, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilter(todoList.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilter(todoList.filter((todo) => todo.completed === false));
        break;
      default:
        setFilter(todoList);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>ToDo</h1>
      </header>
      <Form
        toDo={toDo}
        todoList={todoList}
        setTodoList={setTodoList}
        setToDo={setToDo}
        setStatus={setStatus}
      />
      <TodoList filter={filter} todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;

