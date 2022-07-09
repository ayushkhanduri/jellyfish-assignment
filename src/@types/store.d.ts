export as namespace ReduxType;

export interface Action<T> {
    type: string;
    payload?: T;
}

export type ContextType<T> = T & {
    dispatch: (payload: Action<T>) => void;
};