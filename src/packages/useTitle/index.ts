import { useEffect, useRef } from "react"
import { useUnMount } from "../useUnMount"


function useTitle(title:string){
  // 1. 记录一下原来的title
  const titleRef = useRef(document.title)
  useEffect(()=>{
    document.title = title
  },[title])
  // 2. 组件卸载时恢复原来的title
  useUnMount(()=>{
    document.title = titleRef.current
  })
}

export { useTitle }