import React from 'react';
import UserCard from './UserCard';

const UsersList = (props) => {
    const users = props.location.state.users;
    var deleteUser;
    return (
        <>
            <h1>Number of users: {users.length}</h1>
            <div className="card-wrapper">
                {users.map(user => <UserCard user={user} key={user.id} />)}
            </div>
        </>
    )
}

export default UsersList;
