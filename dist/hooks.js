var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// probably can do better typing this
export var useSlice = function (structuredSelector) {
    var dispatch = useDispatch();
    var applyStructuredSelector = function () {
        return Object
            .keys(structuredSelector)
            .reduce(function (acc, cur) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[cur] = useSelector(structuredSelector[cur]), _a)));
        }, {});
    };
    return __assign({ dispatch: dispatch }, applyStructuredSelector());
};
