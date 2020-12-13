
import * as AI from './index';

describe('idle', () => {

    test('calls endTurn', async () => {
        const endTurn = jest.fn().mockReturnValue(true);
        AI.configure({ endTurn });

        const actor = {} as AI.Actor;
        actor.ai = AI.make(['idle']);
        expect(actor.ai.fns).toEqual(['idle']);

        expect(await AI.execute(actor)).toBeTruthy();
        expect(endTurn).toHaveBeenCalledWith(actor, 1.0);
    });

});
