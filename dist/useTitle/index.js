import { useEffect, useRef } from "react";
import { useUnMount } from "../useUnMount";
function useTitle(title) {
    // 1. 记录一下原来的title
    var titleRef = useRef(document.title);
    useEffect(function () {
        document.title = title;
    }, [title]);
    // 2. 组件卸载时恢复原来的title
    useUnMount(function () {
        document.title = titleRef.current;
    });
}
export { useTitle };
