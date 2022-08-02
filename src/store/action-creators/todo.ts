import { Dispatch } from 'redux';
import { TodoAction, TodoActionTypes } from '../../types/todo';
import axios from 'axios'

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos/', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: res.data})
            }, 800)
        } catch(e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'fetch todos error'
            })
        }
    }
}

export const setTodoPage = (page: number): TodoAction => {
    return {type: TodoActionTypes.SET_PAGE, payload: page}
}