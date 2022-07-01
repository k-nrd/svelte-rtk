import { setContext } from 'svelte';
import { bind } from './bind';
import { KEY } from './constants';
export function provideStore(store) {
    setContext(KEY, bind(store));
}
