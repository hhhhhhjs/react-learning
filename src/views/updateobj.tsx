import { useState } from "react";

// 更新对象
export const Updateobj = () => {
    const [obj, setobj] = useState({
        name: '小黄',
        age: 20,
        hobby: '吉他'
    })

    const changedataName = (e:React.FormEvent<HTMLInputElement>) => { 
        setobj({
            ...obj,
           name: e.currentTarget.value
        })
    }

    const changedataAge = (e:React.FormEvent<HTMLInputElement>) => {
        setobj({
            ...obj,
            age: Number(e.currentTarget.value)
        })
    }

    const changedateHobby = (e:React.FormEvent<HTMLInputElement>) => {
        setobj({
           ...obj,
            hobby: e.currentTarget.value
        })
    }
    return (
        <>
        <div>
            <p>今年{obj.name}{obj.age}岁，喜欢{obj.hobby}</p>
        </div>
        <input type="text" onInput={changedataName} style={{backgroundColor:'red'}}/>
        <input type="text" onInput={changedataAge} style={{backgroundColor:'green'}}/>
        <input type="text" onInput={changedateHobby} style={{backgroundColor:'blue'}}/>
        </>
    )
}