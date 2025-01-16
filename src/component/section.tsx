// section 组件
import '@/styles/section.css'
import { LevelContext } from '../api/LevelContext';
import { LevelContext2 } from '../api/LevelContext';
import { useContext } from 'react';

export const SectionNormal = ({children}:{children: React.ReactNode}) => {
  return (
    <section className='section'>
      {children}
    </section>
  );
}

// 使用 context 
export const SectionContext = ({level, children }: {level:number, children: React.ReactNode}) => {
  return (
    <section className='section'>
        <LevelContext.Provider value={level}>
          {children}
        </LevelContext.Provider>
    </section>
  )
}

// 利用 context 特性，简化版
export const SectionContextSimplify = ({ children }: { children: React.ReactNode}) => {
    const level = useContext(LevelContext2);
  return (
    <section className='section'>
        <LevelContext2.Provider value={level + 1}>
          {children}
        </LevelContext2.Provider>
    </section>
  )
}