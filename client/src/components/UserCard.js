import React from 'react';

const UserCard = ({user}) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">
            <i className="fas fa-user"></i> Name: {user.firstName} {user.lastName}
            </h5>
            <p>
            <i className="fas fa-envelope"></i> Email: {user.email}
            </p>
            {/* <button className="btn btn-danger btn-sm float-right"
                onClick={ () => {deleteUser(user.id)} }>
                <i className="fas fa-trash"></i> Delete
            </button> */}
        </div>
    </div>
)

export default UserCard;