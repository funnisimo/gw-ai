
import { Actor } from './index';
import { ACTIONS, addFunction } from './config';


export async function idle(actor:Actor) {
    await ACTIONS.endTurn(actor, 1.0);
    return true;
}

addFunction('idle', idle);
