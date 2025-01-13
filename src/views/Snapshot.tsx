import { useState } from "react";

/** 因为组件只渲染了一次，
 * 所以 react 现在记住的上一次的 count 就是 0 ，
 * 即使在函数中执行了三次 setcount ，最后结果还是1，
 * 相当于执行了三次 count + 1*/ 
export const Count1 = () => {
  const [count, setCount] = useState(0);
  const countplus = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={countplus}>add</button>
    </div>
  );
}


export function Counter2() {
    const [number, setNumber] = useState(0);
  
    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(number + 5);
          setTimeout(() => {
            alert(number);
          }, 3000);
        }}>+5</button>
      </>
    )
  }