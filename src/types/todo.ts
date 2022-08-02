export interface TodoState {
    todos: any[]
    loading: boolean
    error: null | string
    page: number
    limit: number
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_PAGE = 'SET_PAGE'
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}
interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS
    payload: any[]
}
interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR
    payload: string
}
interface SetPageAction {
    type: TodoActionTypes.SET_PAGE
    payload: number
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetPageAction

