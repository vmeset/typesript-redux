import React, { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: FC = () => {
    
    const {error, limit, loading, page, todos} = useTypedSelector(state => state.todo)
    const {fetchTodos, fetchUsers, setTodoPage} = useActions()
    const pages = [1,2,3,4,5]

    useEffect(() => {
      fetchTodos(page, limit)
    }, [page])
    

    if(loading) {
        return <h1>loading...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} / {todo.title}</div>
            )}
            <div style={{display: 'flex'}}>
                {pages.map(p =>
                    <div key={p} 
                        style={{border: p === page ? '2px solid green' : '1px solid black', padding: '10px'}}
                        onClick={() => setTodoPage(p)}
                    >
                        {p}
                    </div>    
                )}
            </div>
        </div>
    );
};

export default TodoList;