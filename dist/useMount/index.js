import { useEffect, useRef } from 'react';
// 让传入的fn回调函数始终保持最新的引用
function useMount(fn) {
    // 保证cbFn始终存放的都是最新的fn回调函数
    var cbFn = useRef(null);
    useEffect(function () {
        cbFn.current = fn;
    }, [fn]);
    useEffect(function () {
        var fn = cbFn.current;
        fn === null || fn === void 0 ? void 0 : fn(); // 如果存在的话才执行
    }, [fn]);
}
export { useMount };
