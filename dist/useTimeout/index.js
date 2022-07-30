import { useEffect, useRef } from "react";
function useTimeout(cb, time) {
    var cacheFn = useRef(cb);
    useEffect(function () {
        cacheFn.current = cb;
    }, [cb]);
    useEffect(function () {
        var trigger = function () { return cacheFn.current && cacheFn.current(); };
        var timerId = setTimeout(trigger, time);
        return function () {
            clearTimeout(timerId);
        };
    }, [time]);
    // 1. time事件之后自动执行逻辑
    // 2. 组件卸载或者更新时自动清除timer
}
export { useTimeout };
