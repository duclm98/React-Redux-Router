import {
    ADD_TODO,
    GET_TODOS
} from '../constants/ActionTypes';

let initialState = {
    change: true,
    data: []
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TODOS:
            return {
                change: false,
                    data: state.data.concat(action.payload)
            }

            case ADD_TODO:
                return {
                    ...state,
                    data: [...state.data, action.payload]
                }

            default:
                    return state;
    }
}