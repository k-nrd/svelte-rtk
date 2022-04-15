import type { Action, Dispatch } from '@reduxjs/toolkit';
import { Readable } from 'svelte/store';
export declare type BoundStore<S, A> = Readable<S> & {
    readonly dispatch: Dispatch<Action<A>>;
};
