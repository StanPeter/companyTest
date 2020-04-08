import * as actionTypes from "./action";

const initialState = {
    counter: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADDITION:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBSTRACTION:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state;
}

export default counterReducer;