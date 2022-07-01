import { readable } from 'svelte/store';
export function bind(store) {
    var state = readable(store.getState(), function (set) {
        return store.subscribe(function () {
            set(store.getState());
        });
    });
    return {
        subscribe: state.subscribe,
        getState: function () { return store.getState(); },
        dispatch: store.dispatch
    };
}
