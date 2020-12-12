;
;
var FUNCS = {};
async function FALSE() { return false; }
FUNCS.default = FALSE;
export function addKind(id, fn) {
    FUNCS[id] = fn;
    return true;
}
export function make(opts) {
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
//# sourceMappingURL=index.js.map