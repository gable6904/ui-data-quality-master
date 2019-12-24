import Action from '../actions/index'

// Reducer
var initialState = {
    couter: 0,
    text: ""
}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case Action.INCREMENT:
            return {
                couter: state.couter + 1,
                text: action.text
            }
        case Action.DECREMENT:
            return {
                couter: state.couter - 1,
                text: action.text
            }
        case Action.TEST:
            return {
                couter: state.couter + 2,
                text: action.text
            }
        default:
            return state
    }
}

export default counterReducer;