import type { Action, AnyAction, Store } from '@reduxjs/toolkit';
export declare function provideStore<S extends unknown = unknown, A extends Action = AnyAction>(store: Store<S, A>): void;
