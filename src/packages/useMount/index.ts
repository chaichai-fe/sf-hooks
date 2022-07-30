import { useEffect, useRef } from 'react'

type Fn = () => void
// 让传入的fn回调函数始终保持最新的引用

function useMount(fn: Fn) {
  // 保证cbFn始终存放的都是最新的fn回调函数
  const cbFn = useRef<Fn | null>(null)
  useEffect(() => {
    cbFn.current = fn
  }, [fn])
  useEffect(() => {
    const fn = cbFn.current
    fn?.() // 如果存在的话才执行
  }, [fn])
}

export { useMount }
