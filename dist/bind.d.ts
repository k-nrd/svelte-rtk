import type { Action, AnyAction, Dispatch, Store } from '@reduxjs/toolkit';
import type { BoundStore } from './types';
export declare function bind<S = unknown, A extends Action = AnyAction>(store: Store<S, A>): BoundStore<S, Dispatch<A>>;
