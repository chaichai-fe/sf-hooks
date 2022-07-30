import { useEffect,useRef } from "react"

type Cb = ()=>void
function useTimeout(cb:Cb,time:number){
  const cacheFn = useRef(cb)
  useEffect(()=>{
    cacheFn.current = cb
  },[cb])

  useEffect(()=>{
    const trigger = ()=> cacheFn.current && cacheFn.current()
    const timerId = setTimeout(trigger, time)
    return ()=>{
      clearTimeout(timerId)
    }
  },[time])
  // 1. time事件之后自动执行逻辑
  // 2. 组件卸载或者更新时自动清除timer
}

export {useTimeout}