import React, { useEffect, useState } from "react";

const todo_basic01 = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    setInput("");
  }, [list]);
  return (
    <div style={{ textAlign: "center", padding: "100px 0" }}>
      {/* {input} */}
      <ul>
        {list.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input || ""}
      />
      <button onClick={() => setList([...list, input])}>입력</button>
      {/* ...list 는 배열의 원래 값 가져오기! list의 원래들어 있는값 */}
    </div>
  );
};

export default todo_basic01;
