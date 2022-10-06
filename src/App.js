import React, { useEffect, useRef, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import TodoList from "./TodoList";
import TodoWrite from "./TodoWrite";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";

const App = () => {
  const [word, setWord] = useState({
    title: "",
    content: "",
  });
  const [list, setList] = useState([]);

  const num = useRef(1);
  //const 변수 = useRef(); 변수 = 변수+1 로 고유키값을 만들수있음
  //current라는 프로퍼티가 있음
  const inputtitle = useRef(null);
  const inputcontent = useRef(null);

  const navi = useNavigate();

  const handlerWord = (e) => {
    const { name, value } = e.target;
    setWord({
      ...word,
      [name]: value,
      id: num.current, //current라는 프로퍼티로 id 지정
    });
    /*
      객체 비구조할당
      const object = { a: 1, b: 2 };

      const { a, b } = object;

      console.log(a); // 1
      console.log(b); // 2
    */
  };
  const handlerList = () => {
    const hg = /^[ㄱ-ㅎ-가-힣]*$/;
    if (!word.title || !word.content) {
      alert("내용을 입력해주세요");
    }
    if (word.title.length < 5) {
      alert("5자 이상 입력");
      setWord({
        ...word,
        title: "",
      });
      inputtitle.current.focus();
      return;
    }
    if (!hg.test(word.title)) {
      alert("한글만 입력하세요");
      setWord({
        ...word,
        title: "",
      });
      inputtitle.current.focus();
      return;
    }
    if (word.content.length < 5) {
      alert("5자 이상 입력");
      setWord({
        ...word,
        content: "",
      });
      inputcontent.current.focus();
      return;
    }
    setList([...list, word]);
    num.current++;
    navi("/Board");
  };
  useEffect(() => {
    setWord({
      title: "",
      content: "",
    });
  }, [list]);
  return (
    <div>
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/Board">Board</NavLink>
        <NavLink to="/Write">Write</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<TodoList list={list} setList={setList} />} />
        <Route
          path="/Board"
          element={<TodoList list={list} setList={setList} />}
        />
        <Route
          path="/Write"
          element={
            <TodoWrite
              list={list}
              word={word}
              handlerWord={handlerWord}
              handlerList={handlerList}
              inputtitle={inputtitle}
              inputcontent={inputcontent}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

/*
https://jeonghwan-kim.github.io/dev/2022/03/29/react-form-and-formik.html
참고
*삭제 - 새 배열을 만든다(filter 이용)
*/
