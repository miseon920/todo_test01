import React from "react";
import { Link } from "react-router-dom";
const List = ({ boardList }) => {
  return (
    <div className="BoardList">
      <table>
        <thead>
          <tr>
            <th>no</th>
            <th>name</th>
            <th>title</th>
            <th>content</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {
            boardList
              .map((it, idx) => {
                return (
                  <tr key={it.id}>
                    <Link to={`/board/${it.id}`}>
                      <td>{idx + 1}</td>
                      <td>{it.name}</td>
                      <td>{it.title}</td>
                      <td>{it.content}</td>
                      <td>{it.date}</td>
                    </Link>
                  </tr>
                );
              })
              .reverse() //내림차순
          }
        </tbody>
      </table>
    </div>
  );
};

export default List;
