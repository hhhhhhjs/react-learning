import { Fragment } from "react/jsx-runtime";

export function Hello() {
  return (
    <div>
      <h1>hello , this is my first react object</h1>
    </div>
  );
}

interface Props {
  name: string;
  age: number;
  hobby: string;
}

// 在 React 中 props 就是函数的参数
// 如果是组件的话，函数名开头只能大写， 并且返回 jsx
// 只能返回一个根元素，可以使用 div 来包裹，也可以使用 <> 来包裹，也就是 React 的 Fragment
export const Getname = ({name, age, hobby}:Props) => {
  // 在 React 中，函数的返回值就是 JSX
  return (
    <div>
      <div className="container">我的名字是:{name}</div>
      <div>年龄：{age}</div>
      <div>爱好：{hobby}</div>
    </div>
  );
};

// 列表
export const List = () => {
  const list = [{
    name: '张三',
    age: 20,
    hobby: '水果'
  }, {
    name: '李四',
    age: 21,
    hobby: '篮球'
  }, {
    name: '王五',
    age: 22,
    hobby: '足球'
  }];
  return (
    <ul>
      {list.map((item) => (
        <Fragment key={item.name}>
         <li>{item.name}</li>
         <li>{item.age} </li>
         <li>{item.hobby}</li>
         </Fragment>
      ))}
    </ul>
  );
}



// 使用 children
export const Children = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  );
}

// 使用 children
export const Usechildren = () => {
  return(
    <>
    <div>使用了一下children</div>
    </>
  )
}