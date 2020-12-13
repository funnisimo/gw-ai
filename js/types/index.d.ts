import { Config, Actor } from './config';
export declare function addKind(id: string, config: Config): boolean;
export declare function make(opts?: any): Config;
export declare function execute(actor: Actor): Promise<boolean>;
export { configure, addFunction, Actor, AIFunction } from './config';
import './idle';
