'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

async function NULL_FUNC() { }
const ACTIONS = {
    endTurn: NULL_FUNC,
};
function configure(actions) {
    Object.assign(ACTIONS, actions);
}
var FUNCS = {};
async function MISSING() { console.log('Missing AI'); return false; }
FUNCS.default = MISSING;
function addFunction(id, fn) {
    FUNCS[id] = fn;
    return true;
}

async function idle(actor) {
    await ACTIONS.endTurn(actor, 1.0);
    return true;
}
addFunction('idle', idle);

var KINDS = {};
function addKind(id, config) {
    KINDS[id] = config;
    return true;
}
function make(opts = {}) {
    if (typeof opts === 'string') {
        return KINDS[opts];
    }
    const config = {
        fns: [],
    };
    if (Array.isArray(opts)) {
        config.fns = opts;
    }
    return config;
}
async function execute(actor) {
    const config = actor.ai;
    const fns = config.fns || [];
    if (fns.length == 0)
        return false;
    for (let i = 0; i < fns.length; ++i) {
        let fn = fns[i];
        if (typeof fn === 'string') {
            fn = FUNCS[fn] || FUNCS.default;
        }
        if (await fn(actor))
            return true;
    }
    return false;
}

exports.addFunction = addFunction;
exports.addKind = addKind;
exports.configure = configure;
exports.execute = execute;
exports.make = make;
