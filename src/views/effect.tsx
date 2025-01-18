// effect 使用
import { useEffect, useRef, useState } from "react";
import '@/styles/effect.css'

// 在组件渲染期间不能直接修改dom，所以要使用 useEffect 来修改dom

// 错误示例
function VideoPlayer({ src, isPlaying }: { src: string; isPlaying: boolean }) {
  const ref = useRef(null);
  // 这里的逻辑在组件渲染的时候修改了 dom，会产生一系列问题，不可以这样使用；
  // 但是可以将这段逻辑封装在函数中，因为然后通过事件调用来调用函数，因为事件是发生在组件渲染之后的
  if (isPlaying) {
    ref.current.play(); // 渲染期间不能调用 `play()`。
  } else {
    ref.current.pause(); // 同样，调用 `pause()` 也不行。
  }

  return <video ref={ref} src={src} loop playsInline />;
}

// 使用 effect
/**
 * 下面这种写法就可以正常运行，因为 useEffect 会在组件渲染之后执行，
 * 所以可以在 useEffect 中修改dom
 */
export const VideoPlayer2 = ({ src, isPlaying }: { src: string; isPlaying: boolean }) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  // effect 第一个参数为回调，第二个是一个数组，数组中的值发生变化时，effect 会重新执行，
  // 如果相同，effect 不会重新执行
  // 第二个参数为空数组，effect 只会在组件渲染之后执行一次
  useEffect(() => {
   if(ref.current) {
    if (isPlaying) {
      ref.current.play(); // 渲染期间不能调用 `play()`。
    } else {
      ref.current.pause(); // 同样，调用 `pause()` 也不行。
    }
    // 可以返回一个清理函数，清理函数会在组件卸载时执行
    return () => {
      ref.current?.pause();
    }
   }
  }, [isPlaying]); 
  return <video className='' ref={ref} src={src} loop playsInline />;
}

export const Videostart = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
     <div>
        <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? '暂停': '开始'}</button>
        <VideoPlayer2 
        src="//s3plus.meituan.net/zhaopin-official-website-prod/video/campusTV/zippedHomeVideo.mp4"
        isPlaying={isPlaying}
        ></VideoPlayer2>
     </div>
    )
}



/**
 * effect 在开发环境中会执行两次，但是在生产环境中只会执行一次
 * 目的是为了在开发环境中方便调试，告诉开发者潜在的问题，主要是否正确添加清理函数
 */

/**
 * 下面这段代码会打印出
 * effect
 * cleanup
 * effect
 */
export const EffectDemo = () => {
  useEffect(() => {
    console.log('effect')
    return () => {
      console.log('cleanup')
    }
  }, []) 
  return <div>
    effect 开发环境执行两次
  </div>
}
