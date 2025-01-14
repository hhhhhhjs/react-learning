import { useState } from "react";

// 数组使用 usestate

// 简单使用,同样不可更改原数组
export const ArrayList = () => {
    const [list, setlist] = useState<Array<number>>([1, 2, 3, 4, 5]);
    // 在数组中增加一条数据
    const add = () => {
        setlist([
            ...list,
            6
        ])
    }
    return (
        <>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
            <button onClick={add}>增加</button>
        </>
    )
}

/**
 * 由于在 react 中不能直接修改原数组，所以需要返回一个新的数组
 * 想要实现响应式的数组增删改查：使用最多的就是 map 和 filter 方法
 * 增：使用 ...扩展运算符,然后直接在新的数组中直接增加相应的元素即可， 如果是插入元素，使用 slice 方法进行插入
 * 删: 使用 filter 进行过滤
 * 
 * 
 */