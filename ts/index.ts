
import { Config, AIFunction, Actor } from './config';

var KINDS: Record<string,Config> = {};

export function addKind(id:string, config: Config) {
    KINDS[id] = config;
    return true;
}

export function make(opts: any={}) {

    if (typeof opts === 'string') {
        return KINDS[opts];
    }

    const config = {
        fns: [],
    } as Config;

    if (Array.isArray(opts)) {
        config.fns = opts as Array<AIFunction>;
    }

    return config;
}

import { FUNCS } from './config';

export async function execute(actor: Actor) {
    const config = actor.ai;
    const fns = config.fns || [];
    if (fns.length == 0) return false;

    for(let i = 0; i < fns.length; ++i) {
        let fn = fns[i];
        if (typeof fn === 'string') {
            fn = FUNCS[fn] || FUNCS.default;
        }
        if (await fn(actor)) return true;
    }
    return false;
}

export { configure, addFunction, Actor, AIFunction, Config } from './config';
import './idle';


