import React from "react";

const Write = ({
  num,
  input,
  setInput,
  setBoardList,
  handlerList,
  handlerBt,
}) => {
  return (
    <div>
      {console.log(input)}
      <input
        type="text"
        name="name"
        onChange={handlerList}
        value={input.name || ""}
      />
      <input
        type="text"
        name="title"
        onChange={handlerList}
        value={input.title || ""}
      />
      <textarea
        name="content"
        onChange={handlerList}
        value={input.content || ""}
      ></textarea>
      <button onClick={handlerBt}>글쓰기</button>
    </div>
  );
};

export default Write;
