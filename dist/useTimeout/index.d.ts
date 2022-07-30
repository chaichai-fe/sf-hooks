declare type Cb = () => void;
declare function useTimeout(cb: Cb, time: number): void;
export { useTimeout };
