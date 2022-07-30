// 计数器hook

import { useState } from 'react'

export default function useCounter(value: number = 0) {
  const [count, setCount] = useState(value)
  const increment = () => {
    setCount(count + 1)
  }
  return {
    count,
    increment,
  }
}
