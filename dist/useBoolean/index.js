// 实现useBoolean
import { useState } from 'react';
export function useBoolean(defaultValue) {
    if (defaultValue === void 0) { defaultValue = false; }
    var _a = useState(defaultValue), value = _a[0], setValue = _a[1];
    var setTrue = function () {
        setValue(true);
    };
    var setFalse = function () {
        setValue(false);
    };
    return [
        value,
        {
            setTrue: setTrue,
            setFalse: setFalse,
        },
    ];
}
