import * as types from '../constants/ActionTypes';

import * as todoAPI from '../services/apis/Todo';

export const getTodos = () => async dispatch => {
    const response = await todoAPI.getTodos();

    if (response.status) {
        dispatch({
            type: types.GET_TODOS,
            payload: response.payload
        });
    }

    return response;
}

export const addTodo = (todoName) => async dispatch => {
    const response = await todoAPI.addTodo(todoName);

    if (response.status) {
        dispatch({
            type: types.ADD_TODO,
            payload: response.payload
        });
    }

    return response;
}