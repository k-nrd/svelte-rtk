import { setContext, getContext } from 'svelte';
import { bind } from './bind';
var KEY = Symbol('@svelte-rtk');
export var provideStore = function (store) {
    setContext(KEY, bind(store));
};
var createUseSelector = function (isEqual) { return function (selector) {
    var previousState;
    var hasPrevious = false;
    var subscribe = getContext(KEY).subscribe;
    return {
        subscribe: function (listener) {
            return subscribe(function (state) {
                var newState = selector(state);
                if (!hasPrevious) {
                    hasPrevious = true;
                    previousState = newState;
                    listener(newState);
                }
                else if (!isEqual(previousState, newState)) {
                    previousState = newState;
                    listener(newState);
                }
            });
        }
    };
}; };
export var useSelector = createUseSelector(function (a, b) { return a === b; });
export var useDispatch = function () {
    var dispatch = getContext(KEY).dispatch;
    return dispatch;
};
