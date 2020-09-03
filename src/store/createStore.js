export const createStore = (mainReducer, initialState) => {
    let state = initialState;
    let subscribers = [];
    return {
        state,
        dispatch: (action) => {
            state = mainReducer(state, action);
            console.log(state);
            subscribers.forEach((item => item()))
        },
        subscribe: (callbackF) => {
            subscribers.push(callbackF);
        },
        getState: () => {
            return state;
        }
    }
};