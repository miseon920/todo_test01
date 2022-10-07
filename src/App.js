import React, { useEffect, useRef, useState } from "react";
import { Link, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import List from "./board/List";
import View from "./board/View";
import Write from "./board/Write";
import Modify from "./board/Modify";

const App = () => {
  const [input, setInput] = useState({});
  const [boardList, setBoardList] = useState(
    () => JSON.parse(window.localStorage.getItem("boardList")) || []
  );
  const num = useRef(1); //유니크한 ID를 주기위한 변수로도 사용함
  const navi = useNavigate();

  const handlerList = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      //[e.target.name]: e.target.value,
      [name]: value,
      date: new Date().toLocaleDateString(), //객체이므로 날짜를 가져오는 string으로 바꿈
      id: num.current,
    });
  };
  const handlerBt = () => {
    setBoardList([...boardList, input]);
    num.current++;
    navi("/board");
  };

  useEffect(() => {
    setInput({
      name: "",
      title: "",
      content: "",
    });
    window.localStorage.setItem("boardList", JSON.stringify(boardList));
  }, [boardList]);
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" element={<div>Home</div>}>
                홈
              </NavLink>
            </li>
            <li>
              <NavLink to="/board">List</NavLink>
            </li>
            <li>
              <NavLink to="/write">글쓰기</NavLink>
            </li>
            {/* <li>
              <NavLink to={`/board/:${id}`}>상세페이지</NavLink>
            </li> */}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element="">
          홈
        </Route>
        <Route path="/board" element={<List boardList={boardList} />}></Route>
        <Route
          path="/write"
          element={
            <Write
              num={num}
              input={input}
              setInput={setInput}
              handlerList={handlerList}
              boardList={boardList}
              setBoardList={setBoardList}
              handlerBt={handlerBt}
            />
          }
        ></Route>
        <Route
          path="/board/:id"
          element={<View boardList={boardList} setBoardList={setBoardList} />}
        ></Route>
        <Route
          path="/modify/:id"
          element={
            <Modify
              boardList={boardList}
              setBoardList={setBoardList}
              num={num}
              handlerList={handlerList}
              handlerBt={handlerBt}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};
export default App;

/*게시판 만들어보기! */

/*
JSON.parse()란?

parse 메소드는 string 객체를 json 객체로 변환시켜줍니다.

JSON.stringify란?

stringify 메소드는 json 객체를 String 객체로 변환시켜 줍니다.

*/
