import React from "react";
import { Link } from "react-router-dom";
const List = ({ boardList }) => {
  return (
    <div>
      <ul>
        {
          boardList
            .map((it, idx) => {
              return (
                <li key={it.id}>
                  <Link to={`/board/${it.id}`}>
                    <div>{idx + 1}</div>
                    <div>{it.name}</div>
                    <div>{it.title}</div>
                    <div>{it.content}</div>
                    <div>{it.date}</div>
                  </Link>
                </li>
              );
            })
            .reverse() //내림차순
        }
      </ul>
    </div>
  );
};

export default List;
