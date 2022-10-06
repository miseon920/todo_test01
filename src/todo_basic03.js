import React, { useEffect, useRef, useState } from "react";

const Todo_basic03 = () => {
  const [todo, setTodo] = useState({}); //값을 두개이상넣어야 하므로 객체로 변경
  const [todolist, setTodolist] = useState([]);
  const [ko, setKo] = useState(true);
  const num = useRef(1);
  const handlerInput = (e) => {
    const { name, value } = e.target; //객체는 이름이 중요함!
    // e.target.value.replace(/[^0-9]/g, "");
    setTodo({
      ...todo,
      [name]: value,
      id: num.current,
      done: false, //삭제를 하기위한 상태값
    });
  };
  const onlyKorean = (e) => {
    const pattern = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    if (pattern.test(e.target.value)) {
      alert("한글만 입력가능합니다!");
      e.target.value = e.target.value.replace(pattern, "");
    }
  };
  const handlerList = (e) => {
    if (todo.title.length < 5) {
      alert("5자이상 입력");
      return;
    }
    setTodolist([...todolist, todo]);
    //num.current = num.current + 1;
    num.current++;
  };
  const handlerDelete = (id) => {
    //삭제
    //console.log(id);
    setTodolist(todolist.filter((it) => id !== it.id));
  };
  const handlerModifiy = (id) => {
    //수정
    setTodolist(
      todolist.map((it) =>
        id === it.id
          ? {
              ...it,
              done: !it.done,
            }
          : it
      )
    );
  };
  useEffect(() => {
    setTodo({
      title: "",
      content: "",
    });
    // console.log(todo);
  }, [todolist]);
  return (
    <div>
      <ul>
        {todolist.map((it, idx) => (
          <li key={it.id}>
            <input
              type="checkbox"
              onChange={() => {
                handlerModifiy(it.id);
                console.log(it.done);
              }}
            />
            {idx + 1}
            {it.title} / {it.content}
            <button onClick={() => handlerDelete(it.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <form>
        <input
          type="text"
          onChange={handlerInput}
          name="title"
          value={todo.title || ""}
          onInput={onlyKorean}
        />
        <input
          type="text"
          onChange={handlerInput}
          name="content"
          value={todo.content || ""}
          //input의 value가 undefined일 때 ''가 들어올 수 있도록 하면 된다.
          onInput={onlyKorean}
        />
        <button onClick={handlerList}>글쓰기</button>
      </form>
      {/* {console.log(todo, num)} */}
    </div>
  );
};

export default Todo_basic03;

/*
https://jeonghwan-kim.github.io/dev/2022/03/29/react-form-and-formik.html
참고
*삭제 - 새 배열을 만든다(filter 이용)
*/
