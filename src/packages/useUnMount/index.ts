import { useEffect, useRef } from 'react'

type Fn = () => void
function useUnMount(fn: Fn) {
  const fnCache = useRef<Fn | null>(null)
  useEffect(() => {
    fnCache.current = fn
  }, [fn])
  // 如何知道组件卸载呢？ useEffect
  useEffect(() => {
    return () => {
      // 组件卸载时自动执行
      const fn = fnCache.current
      fn?.()
    }
  }, [])
}

export { useUnMount }
