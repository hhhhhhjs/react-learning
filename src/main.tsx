import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // 这里使用 react 提供的严格模式来检测有些函数需要是纯函数，纯函数就是不会改变传入的参数的值
  <StrictMode>
    <App />
  </StrictMode>
)
