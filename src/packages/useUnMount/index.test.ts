import { renderHook } from "@testing-library/react"
import { useUnMount } from "."

test('useUnmount should work',()=>{
  // 模拟一个函数
  const fn = jest.fn()
  const view = renderHook(()=>useUnMount(fn))
  // 1. 组件渲染和重渲染的时候fn都不会执行
  expect(fn).toBeCalledTimes(0)
  view.rerender()
  expect(fn).toBeCalledTimes(0)
  // 2. 组件卸载的时候fn会执行一次
  view.unmount()
  expect(fn).toBeCalledTimes(1)
})

