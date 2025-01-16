import { useReducer } from "react";

// 使用 reducer 来实现一个计数器


// 定义 reducer
const reducer = (state: {count:number}, action: { type: string }) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1};
    case "sub":
      return { count: state.count - 1};
    case "reset":
      return { count: 0};
    default:
      return state;
  }
}

export const Counter = () => {
    const initcount = { count: 0 }
    const [state, dispatch] = useReducer(reducer, initcount)
    const handleAdd = () => {
        dispatch({ type: "add" })
    }

    const handleSub = () => {
        dispatch({ type: "sub" })
    }

    const handleReset = () => {
        dispatch({ type: "reset" })
    }
    return (
        <div>
            <h2>计数器</h2>
            <p>当前计数：{state.count}</p>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSub}>-1</button>
            <button onClick={handleReset}>重置</button>
        </div>
    )
}

