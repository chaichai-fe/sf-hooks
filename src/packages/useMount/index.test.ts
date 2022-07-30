import { renderHook } from '@testing-library/react'
import { useMount } from '.'

test('useMount', () => {
  // jest模拟一个函数出来
  const fn = jest.fn()
  const view = renderHook(() => useMount(fn))
  expect(fn).toBeCalledTimes(1)
  // 重新渲染组件 再次执行一次
  view.rerender()
  expect(fn).toBeCalledTimes(1)
})

// 1. 如何模拟一个回调函数 jest.fn()
// 2. renderHook -> view -> view.rerender() 重新渲染组件 测试和组件生命周期相关的场景
// 3. expect(fn).toBeCalledTimes(n) 如果fn函数执行的次数符合预期 === n 通过测试
