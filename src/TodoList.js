import React from "react";

const TodoList = ({ list, setList }) => {
  // const { list } = props;
  const handlerRemove = (id) => {
    setList(list.filter((it) => id !== it.id));
    //id ===  ? console.log("g2") : console.log("ddd");
  };

  return (
    <div>
      <h2>list</h2>
      <ul>
        {list.map((li, idx) => (
          <li key={li.id}>
            {idx}
            {li.title} {li.content}
            <button onClick={() => handlerRemove(li.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
