import React, { useEffect, useState } from "react";

const Todo_basic02 = () => {
  const [todo, setTodo] = useState({}); //값을 두개이상넣어야 하므로 객체로 변경
  const [todolist, setTodolist] = useState([]);
  useEffect(() => {
    setTodo("");
  }, [todolist]);
  return (
    <div>
      <ul>
        {todolist.map((it, idx) => (
          <li key={idx}>
            {it.title} / {it.content}
          </li>
        ))}
      </ul>
      <input
        type="text"
        onChange={(e) => {
          setTodo({ ...todo, [e.target.name]: e.target.value });
          //...todo = 원래값
          /*
            객체 속성을 동적으로 업데이트하기 위한 것 / []안에 고유한 값을 가짐
            객체 안에서 key를 [ ]로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됩니다.
            예를 들어 다음과 같은 객체를 만들면 아래와 같은 결과를 얻을 수 있다.

            const name = 'variantKey';
            const object = {
                [name] : 'value'
            };

            //결과 값
            {
            'variantKey' : 'value'
            }
        */
        }}
        name="title"
      />
      <input
        type="text"
        onChange={(e) => {
          setTodo({ ...todo, [e.target.name]: e.target.value });
        }}
        name="content"
      />
      <button onClick={() => setTodolist([...todolist, todo])}>글쓰기</button>
    </div>
  );
};

export default Todo_basic02;

/*
https://jeonghwan-kim.github.io/dev/2022/03/29/react-form-and-formik.html
참고
*/
