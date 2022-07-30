// 实现useBoolean

import { useState } from 'react'

// 1. 实现hook的结构
// 2. 定义ts类型

type Actions = {
  setTrue: () => void
  setFalse: () => void
}
export function useBoolean(defaultValue = false): [boolean, Actions] {
  const [value, setValue] = useState(defaultValue)
  const setTrue = () => {
    setValue(true)
  }
  const setFalse = () => {
    setValue(false)
  }
  return [
    value,
    {
      setTrue,
      setFalse,
    },
  ]
}
