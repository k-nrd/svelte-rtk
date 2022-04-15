import { setContext, getContext } from 'svelte';
import { bind } from './bind';
var KEY = Symbol('@svelte-rtk');
export var provideStore = function (store) {
    setContext(KEY, bind(store));
};
export var useSelector = function (selector) {
    var subscribe = getContext(KEY).subscribe;
    return {
        subscribe: function (listener) {
            return subscribe(function (state) {
                return listener(selector(state));
            });
        }
    };
};
export var useDispatch = function () {
    var dispatch = getContext(KEY).dispatch;
    return dispatch;
};
