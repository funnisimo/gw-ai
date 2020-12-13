export declare type AIFunction = (actor: Actor) => Promise<boolean>;
export interface Config {
    fns: Array<AIFunction>;
}
export interface Actor {
    ai: Config;
}
export interface Actions {
    endTurn: (actor: Actor, cost?: number) => void;
}
export declare const ACTIONS: Actions;
export declare function configure(actions: Partial<Actions>): void;
export declare var FUNCS: Record<string, AIFunction>;
export declare function addFunction(id: string, fn: AIFunction): boolean;
