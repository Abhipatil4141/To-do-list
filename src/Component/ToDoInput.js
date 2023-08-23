import React, { useState } from "react";

function ToDoInput(props) {
  const [inputText, setInputText] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your to-do"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      ></input>
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default ToDoInput;
