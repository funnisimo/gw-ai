
export type AIFunction = (actor:Actor) => Promise<boolean>;

export interface Config {
    fns: Array<AIFunction>;
};

export interface Actor {
    ai: Config;
};


export interface Actions {
    endTurn: (actor:Actor, cost?:number) => void;
}

async function NULL_FUNC() {}

export const ACTIONS:Actions = {
    endTurn: NULL_FUNC,
};

export function configure(actions:Partial<Actions>) {
    Object.assign(ACTIONS, actions);
}


export var FUNCS: Record<string,AIFunction> = {};
async function MISSING() { console.log('Missing AI'); return false; }
FUNCS.default = MISSING;

export function addFunction(id:string, fn: AIFunction) {
    FUNCS[id] = fn;
    return true;
}


