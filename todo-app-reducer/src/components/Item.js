import React from "react";

export default function Item(props) {
  return (
    <div className="container" onClick={() => props.toggleItem(props.item.id)}>
      <p className={`item${props.item.completed ? " completed" : ""}`}>
        {props.item.name}
      </p>
    </div>
  );
}
