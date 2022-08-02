import React, { Dispatch, FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';
import {useDispatch} from 'react-redux'
import { useActions } from '../hooks/useActions';

const UserList: React.FC = () => {

    const {error, users, loading} = useTypedSelector(state => state.user)
    // const dispatch: Dispatch<any> = useDispatch()
    const {fetchUsers} = useActions()

    useEffect(() => {
    //   dispatch(fetchUsers())
        fetchUsers()
    }, [])
    
    if(loading) {
        return <h1>loading...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }
    
    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>    
            )}
        </div>
    );
};

export default UserList;