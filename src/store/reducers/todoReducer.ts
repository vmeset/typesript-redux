import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";


const initialState: TodoState = {
    todos: [],
    loading: false,
    limit: 10,
    page: 1,
    error: null
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch(action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, todos: action.payload, loading: false}
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, error: action.payload, loading: false}
        case TodoActionTypes.SET_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}