import { DefineComponent, Plugin } from 'vue';


declare const VueFormElle: Exclude<Plugin['install'], undefined>;
export default VueFormElle;

export const VueFormElleSample: DefineComponent<{}, {}, any>;
