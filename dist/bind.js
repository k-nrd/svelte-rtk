import { readable } from 'svelte/store';
export var bind = function (store) {
    var state = readable(store.getState(), function (set) {
        return store.subscribe(function () {
            set(store.getState());
        });
    });
    return {
        subscribe: state.subscribe,
        dispatch: store.dispatch
    };
};
