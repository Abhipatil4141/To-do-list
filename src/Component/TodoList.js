import React from "react";

function TodoList(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i
          class="fa-solid fa-trash-can icon-delete"
          onClick={(e) => {
            props.deleteListItem(props.index);
          }}
        ></i>
        {/* <button
          onClick={(e) => {
            props.deleteListItem(props.index);
          }}
        >
          Delete
        </button> */}
      </span>
    </li>
  );
}

export default TodoList;
