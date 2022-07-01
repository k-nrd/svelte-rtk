import { getContext } from 'svelte';
import { KEY } from './constants';
export function createDispatcher() {
    return function dispatcher() {
        var dispatch = getContext(KEY).dispatch;
        return dispatch;
    };
}
export var dispatcher = createDispatcher();
