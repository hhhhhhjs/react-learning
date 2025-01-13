import { Fragment } from "react";
import { useState } from "react";
import { useImmer} from "use-immer";

/**
 *  由于在 react 中不能直接修改 state 中的数据；
 *  如果是对象的话，并且只有一层，也就是说都是基础数据类型，那么直接使用 ... 展开运算符即可；
 *  如果是多层，也就是对象中的属性值还是一个对象的话，最佳实践是使用 immer 库；
 */

// 原始写法
 export const Selfobj = () => {
  const [obj, setObj] = useState({
    name: "张三",
    description: {
      age: 18,
      sex: "男",
    },
  });

  // 如果想要修改数据
  const changeObj = () => {
    setObj({
      // 先赋值原来的对象
      ...obj,
      // 将 name 修改为李四
      name: "李四",
      description: {
        ...obj.description,
        // 修改里面数据
        age: 19,
        sex: "女",
      },
    });
  };
  return (
    <Fragment>
      <div>
        <p>姓名：{obj.name}</p>
        <p>年龄：{obj.description.age}</p>
        <p>性别：{obj.description.sex}</p>
      </div>
      <button onClick={changeObj}>点击修改数据</button>
    </Fragment>
  );
};


// 错误示范，这种做法错的，因为直接修改了原来的数据
export const Errorobj = () => {
    const [obj, setObj] = useState({
        name: "小红",
        description: {
            age: 22,
            sex: "女",
        },
    });
    // 如果想要修改数据
    const changeObj = () => {
        setObj((prev) => {
            // 直接修改数据
            prev.name = "小明";
            prev.description.age = 23;
            prev.description.sex = "男";
        });
    };
    return (
        <Fragment>
            <div>
                <p>使用 immer</p>
                <p>姓名：{obj.name}</p>
                <p>年龄：{obj.description.age}</p>
                <p>性别：{obj.description.sex}</p>
            </div>
            <button onClick={changeObj}>点击修改数据</button>
        </Fragment>
    );
}


// 使用 immer
export const Immerobj = () => {
  const [obj, setObj] = useImmer({
      name: "小红",
      description: {
          age: 22,
          sex: "女",
      },
  });
  // 如果想要修改数据
  const changeObj = () => {
      setObj((prev) => {
          // 直接修改数据
          prev.name = "小明";
          prev.description.age = 23;
          prev.description.sex = "男";
      });
  };
  return (
      <Fragment>
          <div>
              <p>使用 immer</p>
              <p>姓名：{obj.name}</p>
              <p>年龄：{obj.description.age}</p>
              <p>性别：{obj.description.sex}</p>
          </div>
          <button onClick={changeObj}>点击修改数据</button>
      </Fragment>
  );
}
