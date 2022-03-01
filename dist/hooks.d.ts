import type { Action, Dispatch, Store } from 'redux';
import type { Readable } from 'svelte/store';
export declare const provideStore: <S, A>(store: Readonly<Store<S, Action<A>>>) => void;
export declare const useSelector: <S, A, T>(selector: (state: S) => T) => Readable<T>;
export declare const useDispatch: <S, A>() => Dispatch<Action<A>>;
export declare const useSlice: <S, A>(structuredSelector: Readonly<Record<string, any>>) => Record<string, Dispatch<Action<A>> | Readable<any>>;
