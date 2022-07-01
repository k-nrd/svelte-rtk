import type { Dispatch } from '@reduxjs/toolkit';
export declare function createDispatcher<ST extends unknown = unknown, AD extends Dispatch = Dispatch>(): () => AD;
export declare const dispatcher: () => Dispatch<import("@reduxjs/toolkit").AnyAction>;
