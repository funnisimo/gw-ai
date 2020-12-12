;
;
var FUNCS = {};
async function FALSE() { return false; }
FUNCS.default = FALSE;
var KINDS = {};
export function addKind(id, config) {
    KINDS[id] = config;
    return true;
}
export function addFunction(id, fn) {
    FUNCS[id] = fn;
    return true;
}
export function make(opts = {}) {
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
export async function execute(actor) {
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
