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

export const Getname = ({name, age, hobby}:Props) => {
  return (
    <div>
      <div>我的名字是:{name}</div>
      <div>年龄：{age}</div>
      <div>爱好：{hobby}</div>
    </div>
  );
};
