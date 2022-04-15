import type { Action, Dispatch, Store } from '@reduxjs/toolkit';
import type { Readable } from 'svelte/store';
export declare const provideStore: <S, A>(store: Readonly<Store<S, Action<A>>>) => void;
export declare const useSelector: <S, A, T>(selector: (state: S) => T) => Readable<T>;
export declare const useDispatch: <S, A>() => Dispatch<Action<A>>;
