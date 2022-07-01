import { Action, Dispatch } from '@reduxjs/toolkit';
import { Readable } from 'svelte/store';
export declare type BoundStore<ST, AD extends Dispatch> = Readable<ST> & {
    readonly dispatch: AD;
    readonly getState: () => ST;
};
export declare type Selector<ST, SL> = (state: ST) => SL;
export declare type CreateSelector<ST> = <SL>(selector: Selector<ST, SL>, equalityFn?: Comparison<SL>) => Readable<SL>;
export declare type InferredPayload<D> = D extends Dispatch<infer A> ? A extends Action<infer P> ? P : any : any;
export declare type Comparison<T> = (a: T, b: T) => boolean;
