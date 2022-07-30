declare type Actions = {
    setTrue: () => void;
    setFalse: () => void;
};
export declare function useBoolean(defaultValue?: boolean): [boolean, Actions];
export {};
