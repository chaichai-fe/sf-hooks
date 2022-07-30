// 完成对hook的测试

import { act, renderHook } from '@testing-library/react'
import useCounter from './useCounter'

// 1. 运行hook函数  - renderHook

test('should render counter', () => {
  const { result } = renderHook(() => useCounter())
  // result.current { count, increment }
  expect(result.current.count).toBe(0)
})

// 2. useCounter做一个更新 - act

test('should incement counter', () => {
  const { result } = renderHook(() => useCounter())
  // act函数去执行hook的修改函数测试值是否变化
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(2)
})

// 3. hook函数的初始值

test('should increment counter from custom initial value', () => {
  const { result } = renderHook(() => useCounter(100))
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(101)
})
