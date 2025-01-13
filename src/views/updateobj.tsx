import { useState } from "react";

// 更新对象
export const Updateobj = () => {
  const [obj, setobj] = useState({
    name: "小黄",
    age: 20,
    hobby: "吉他",
  });

//   const changedataName = (e: any) => {
//     setobj({
//       ...obj,
//       name: e.target.value,
//     });
//     console.log(e.target.name, e);
//   };

//   const changedataAge = (e: any) => {
//     setobj({
//       ...obj,
//       age: Number(e.target.value),
//     });
//   };

//   const changedateHobby = (e: any) => {
//     setobj({
//       ...obj,
//       hobby: e.target.value,
//     });
//   };

  // 上述逻辑比较繁琐，可以直接在对象中使用变量赋值的方法，只需要一个函数即可
const changedage = (e:any) => {
    setobj({
      ...obj,
      [e.target.name]: e.target.value,
    })
}
  return (
    <>
      <div>
        <p>
          今年{obj.name}
          {obj.age}岁，喜欢{obj.hobby}
        </p>
      </div>
      <input
        type="text"
        name="name"
        onChange={changedage}
        style={{ backgroundColor: "red" }}
      />
      <input
        type="text"
        name="age"
        onChange={changedage}
        style={{ backgroundColor: "green" }}
      />
      <input
        type="text"
        name="hobby"
        onChange={changedage}
        style={{ backgroundColor: "blue" }}
      />
    </>
  );
};

