import React from 'react';
import UserCard from './UserCard';

const UsersList = ({users}) => (
    <>
        <h1>Number of users: {users.length}</h1>
        <div className="card-wrapper">
            {users.map(user => <UserCard user={user} key={user.id} />)}
        </div>
    </>
)

export default UsersList;
