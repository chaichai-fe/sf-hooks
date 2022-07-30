// 1. title是否由hook决定 传入的title是什么 当前的页面title就是什么
// 2. 组件卸载时是否可以复原原来的title

import { renderHook } from "@testing-library/react";
import { useTitle } from ".";

test('useTitle-should update document title', ()=>{
  // 如何给一个需要传参的hook函数传递默认参数 initialProps
  const view  = renderHook((props)=>useTitle(props),{
    initialProps: 'Current page title'
  })
  expect(document.title).toBe('Current page title')
  view.rerender('Other page title')
  expect(document.title).toBe('Other page title')
})

test('useTitle-should restore document title on unmount',()=>{
  document.title = 'old title'
  const view  = renderHook((props)=>useTitle(props),{
    initialProps: 'Current page title'
  })
  expect(document.title).toBe('Current page title')
  // 卸载组件
  view.unmount()
  expect(document.title).toBe('old title')

})