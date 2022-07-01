import { getContext } from 'svelte';
import { readable } from 'svelte/store';
import { KEY } from './constants';
function refEquality(a, b) {
    return a === b;
}
export function createSelector() {
    return function selector(selector, equalityFn) {
        if (equalityFn === void 0) { equalityFn = refEquality; }
        var store = getContext(KEY);
        var previousState = selector(store.getState());
        return readable(previousState, function (set) {
            return store.subscribe(function (state) {
                var newState = selector(state);
                if (!equalityFn(previousState, newState)) {
                    previousState = newState;
                    set(newState);
                }
            });
        });
    };
}
export var selector = createSelector();
