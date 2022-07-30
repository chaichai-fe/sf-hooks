// 测试useBoolean hook
// 1. 初始值测试 如果不传参 默认值是false
// 2. setTrue方法进行测试
// 3. setFalse方法进行测试
// 4. 测试一下hook传入自定义参数？

import { act, renderHook } from '@testing-library/react'
import { useBoolean } from '.'

test('useBoolean-defaltValue', () => {
  const { result } = renderHook(() => useBoolean())
  expect(result.current[0]).toBe(false)
})

test('useBoolean-setTrue', () => {
  const { result } = renderHook(() => useBoolean())
  act(() => {
    result.current[1].setTrue()
  })
  expect(result.current[0]).toBe(true)
})

test('useBoolean-setFalse', () => {
  const { result } = renderHook(() => useBoolean())
  act(() => {
    result.current[1].setFalse()
  })
  expect(result.current[0]).toBe(false)
})
