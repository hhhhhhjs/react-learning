// heading 组件
import { useContext } from "react";
import { LevelContext } from "../api/LevelContext";
import { LevelContext2 } from "../api/LevelContext";


export const Heading1 = ({level, children}:{level:number, children: React.ReactNode}) => {
    switch (level) {
        case 1:
            return <h1>{children}</h1>; 
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            return <h1>{children}</h1>
    }
}

// 这里只是使用了 usecontext ，但是并没有使用到 context 可以自动获取外层 context 的特性
export const Heading2 = ({children}:{ children: React.ReactNode}) => {
    const level = useContext(LevelContext);
    switch (level) {
        case 1:
            return <h1>{children}</h1>; 
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            return <h1>{children}</h1>
    }
}

// 使用 context 特性
export const Heading3 = ({children}:{ children: React.ReactNode}) => {
    const level = useContext(LevelContext2);
    switch (level) {
        case 1:
            return <h1>{children}</h1>; 
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            return <h1>{children}</h1>
    }
}