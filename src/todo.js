import React from "react";
const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item  row" key={todo.id}>
          <div className="col s12 m4 l8 flow-text">{todo.content}</div>
          <a
            className="waves-effect waves-light btn-small right col s12 m1 l2"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            x
          </a>
        </div>
      );
    })
  ) : (
    <p className="center"> You have no todo's left, </p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
