import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const View = ({ boardList, setBoardList }) => {
  const { id } = useParams(); // 일어나야 하는곳에 적기
  const navi = useNavigate();
  const v = boardList.find((it) => String(it.id) === id);
  //id와 보드리스트의 id가 일치하는 것만 뿌려주기
  const deleteHandler = () => {
    const newList = boardList.filter((it) => it.id !== v.id);
    setBoardList(newList);
    navi("/board");
  };
  return (
    <div>
      <div>글쓴이 : {v.name}</div>
      <div>날짜 : {v.date}</div>
      <div>제목 : {v.title}</div>
      <div>내용 : {v.content}</div>
      <Link to={`/modify/${v.id}`}>수정</Link>
      <button onClick={deleteHandler}>삭제</button>
    </div>
  );
};

export default View;
