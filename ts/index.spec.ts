
import * as AI from './index';


describe('index', () => {

    test('exports', () => {
        expect(AI.addFunction).toBeFunction();
        expect(AI.make).toBeFunction();
        expect(AI.addKind).toBeFunction();
        expect(AI.execute).toBeFunction();
    });

    test('simplest', async () => {
        const actor = {} as AI.Actor;
        actor.ai = AI.make();
        expect(await AI.execute(actor)).toBeFalsy();
    });

});
