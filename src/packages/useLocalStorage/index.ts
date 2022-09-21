// get the storage value
// if value can not be get return the value by user

import { useEffect, useState } from 'react'

function getCurrentStorage<T>(key: string, initialValue: T): T {
  try {
    const currentValue = window.localStorage.getItem(key)
    return currentValue ? JSON.parse(currentValue) : initialValue
  } catch {
    return initialValue
  }
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [value, setValue] = useState(() =>
    getCurrentStorage<T>(key, initialValue)
  )

  // 修改状态切同步到localstorage
  const setStorageValue = (value: T) => {
    setValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  // 修改localStorage的时候同步到state
  useEffect(() => {
    const storageHandler = (e: StorageEvent) => {
      try {
        setValue(e.newValue ? JSON.parse(e.newValue) : initialValue)
      } catch (error) {
        setValue(initialValue)
      }
    }
    window.addEventListener('storage', storageHandler)
    return () => {
      window.removeEventListener('storage', storageHandler)
    }
  }, [initialValue, key])
  return [value, setStorageValue]
}
