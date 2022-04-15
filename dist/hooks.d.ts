import type { Action, Dispatch, Store } from '@reduxjs/toolkit';
import type { Selector, Listener } from './types';
export declare const provideStore: <S, A>(store: Readonly<Store<S, Action<A>>>) => void;
export declare const useSelector: (selector: Selector<unknown, unknown>) => {
    subscribe: (listener: Listener<unknown>) => import("svelte/store").Unsubscriber;
};
export declare const useDispatch: <S, A>() => Dispatch<Action<A>>;
