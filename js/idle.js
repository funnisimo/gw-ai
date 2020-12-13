import { ACTIONS, addFunction } from './config';
export async function idle(actor) {
    await ACTIONS.endTurn(actor, 1.0);
    return true;
}
addFunction('idle', idle);
//# sourceMappingURL=idle.js.map