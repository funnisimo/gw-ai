async function NULL_FUNC() { }
export const ACTIONS = {
    endTurn: NULL_FUNC,
};
export function configure(actions) {
    Object.assign(ACTIONS, actions);
}
