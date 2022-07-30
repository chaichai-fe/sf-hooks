import { useEffect, useRef } from 'react';
function useUnMount(fn) {
    var fnCache = useRef(null);
    useEffect(function () {
        fnCache.current = fn;
    }, [fn]);
    // 如何知道组件卸载呢？ useEffect
    useEffect(function () {
        return function () {
            // 组件卸载时自动执行
            var fn = fnCache.current;
            fn === null || fn === void 0 ? void 0 : fn();
        };
    }, []);
}
export { useUnMount };
