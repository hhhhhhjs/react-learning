import { useRef } from "react";

// 基础使用 ， 可以用来保存值， 但是不会重新渲染组件，所以点击之后视图不会变化
/**
 * 
 * ref 使用场景：
 * 1. 取 dom
 * 2. 存储 timeid
 * 3. 存储 数据
 */
export const Useref = () => {
    const count = useRef(0);
    return (
        <div style={{color:'green'}}>
            <h2>useRef</h2>
            <p>当前计数：{count.current}</p>
            <button onClick={() => count.current  = count.current + 1}>+1</button>
        </div>
    )
}