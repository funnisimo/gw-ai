
import * as AI from './index';

describe('idle', () => {

    test('calls endTurn', () => {
        const endTurn = jest.fn().mockReturnValue(true);
        AI.configure({ endTurn });

        const actor = {} as AI.Actor;
        actor.ai = AI.make(['idle']);
        expect(actor.ai.fns).toEqual(['idle']);

        expect(AI.execute(actor)).toBeTruthy();
        expect(endTurn).toHaveBeenCalledWith(actor, 1.0);
    });

});
