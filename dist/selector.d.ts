import type { Dispatch } from '@reduxjs/toolkit';
import type { CreateSelector } from './types';
export declare function createSelector<ST extends unknown = unknown, AD extends Dispatch = Dispatch>(): CreateSelector<ST>;
export declare const selector: CreateSelector<unknown>;
