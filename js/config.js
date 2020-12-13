async function NULL_FUNC() { }
export const ACTIONS = {
    endTurn: NULL_FUNC,
};
export function configure(actions) {
    Object.assign(ACTIONS, actions);
}
export var FUNCS = {};
async function MISSING() { console.log('Missing AI'); return false; }
FUNCS.default = MISSING;
export function addFunction(id, fn) {
    FUNCS[id] = fn;
    return true;
}
//# sourceMappingURL=config.js.map