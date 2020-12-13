declare type AIFunction = (actor: Actor) => Promise<boolean>;
interface Config {
    fns: Array<AIFunction>;
}
interface Actor {
    ai: Config;
}
interface Actions {
    endTurn: (actor: Actor, cost?: number) => void;
}
declare function configure(actions: Partial<Actions>): void;
declare function addFunction(id: string, fn: AIFunction): boolean;

declare function addKind(id: string, config: Config): boolean;
declare function make(opts?: any): Config;
declare function execute(actor: Actor): Promise<boolean>;

export { AIFunction, Actor, addFunction, addKind, configure, execute, make };
