import { Actor } from './index';
export interface Actions {
    endTurn: (actor: Actor, cost?: number) => void;
}
export declare const ACTIONS: Actions;
export declare function configure(actions: Partial<Actions>): void;
