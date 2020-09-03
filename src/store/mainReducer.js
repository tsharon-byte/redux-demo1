import {INCREMENT, DECREMENT} from "./actions";

export const mainReducer = (state = {counter: 5}, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, counter: state.counter + 1};
        case DECREMENT:
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }

};