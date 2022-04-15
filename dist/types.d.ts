import type { Action, Dispatch } from '@reduxjs/toolkit';
import { Readable } from 'svelte/store';
export declare type BoundStore<S, A> = Readable<S> & {
    readonly dispatch: Dispatch<Action<A>>;
};
export declare type Selector<S, T> = (state: S) => T;
export declare type EqualityChecker<T> = (a: T | null | undefined, b: T | null | undefined) => boolean;
export declare type Listener<S> = (state: S) => void;
