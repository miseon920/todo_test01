import React from "react";
import { Link } from "react-router-dom";
const List = ({ boardList }) => {
  return (
    <div className="BoardList">
      <table className="BoardTable">
        <thead>
          <tr>
            <th>no</th>
            <th>title</th>
            <th>name</th>
            {/* <th>content</th> */}
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {
            boardList
              .map((it, idx) => {
                return (
                  <tr key={it.id}>
                    <td>{idx + 1}</td>
                    <td className="title">
                      <Link to={`/board/${it.id}`}>{it.title}</Link>
                    </td>
                    <td>{it.name}</td>
                    {/* <td>{it.content}</td> */}
                    <td>{it.date}</td>
                  </tr>
                );
              })
              .reverse() //내림차순
          }
        </tbody>
      </table>
      <div className="bts">
        <Link to="/write">글쓰기</Link>
      </div>
    </div>
  );
};

export default List;
