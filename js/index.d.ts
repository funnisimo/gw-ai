export declare type AIFunction = (actor: Actor) => Promise<boolean>;
export interface Config {
    fns: Array<AIFunction>;
}
export interface Actor {
    ai: Config;
}
export declare function addKind(id: string, config: Config): boolean;
export declare function addFunction(id: string, fn: AIFunction): boolean;
export declare function make(opts?: any): Config;
export declare function execute(actor: Actor): Promise<boolean>;
