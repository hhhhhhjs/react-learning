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
