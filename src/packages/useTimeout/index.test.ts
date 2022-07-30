import { renderHook } from "@testing-library/react";
import { useTimeout } from ".";

// 1. 某个时间之后 回调确实会自动执行
// 2. 组件卸载之后 回调不再进行执行 timer被清理掉

// 模拟一个异步操作 借助await语法模拟一下程序暂停

const timeout = (time:number)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(1)
    },time)
  })
}

test('cb can called after time',async ()=>{
  const fn = jest.fn()
  renderHook(()=>useTimeout(fn, 1000))
  await timeout(2000)
  // 2000以后期望我们的回调已经被执行了
  expect(fn).toHaveBeenCalled()
})

test('stop on unmount',async ()=>{
  const fn = jest.fn()
  const view = renderHook(()=>useTimeout(fn, 1000))
  // 组件卸载
  view.unmount()
  await timeout(2000)
  expect(fn).not.toHaveBeenCalled()
})