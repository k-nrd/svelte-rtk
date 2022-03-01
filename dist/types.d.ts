import type { Action, Dispatch } from 'redux';
import { Readable } from 'svelte/store';
export declare type BoundStore<S, A> = Readable<S> & {
    readonly dispatch: Dispatch<Action<A>>;
};
