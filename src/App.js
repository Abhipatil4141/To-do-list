import logo from "./logo.svg";
import "./App.css";
import ToDoInput from "./Component/ToDoInput";
import { useState } from "react";
import TodoList from "./Component/TodoList";

function App() {
  const [listTOdo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTOdo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTOdo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="App">
      <div className="main-Container" />
      <div className="center-Container" />

      <ToDoInput addList={addList} />
      <h1 className="app-heading">TODO-List</h1>
      {/* <hr /> */}
      {listTOdo.map((listIteam, i) => {
        return (
          <TodoList
            key={i}
            index={i}
            item={listIteam}
            deleteListItem={deleteListItem}
          />
        );
      })}
    </div>
  );
}

export default App;
