import React from "react";

function TodoWrite({
  list,
  word,
  handlerWord,
  handlerList,
  inputtitle,
  inputcontent,
}) {
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={handlerWord}
          name="title"
          value={word.title}
          ref={inputtitle}
        />
        {/* 객체를 받아올때 키값을 []안에 적어준것 
          ...word, ~~ 써서 객체안에 값을 합쳐줌
        */}
      </div>
      <div>
        <input
          type="text"
          onChange={handlerWord}
          name="content"
          value={word.content}
          ref={inputcontent}
        />
      </div>
      <div>
        <button onClick={handlerList}>글쓰기</button>
      </div>
    </div>
  );
}

export default TodoWrite;
