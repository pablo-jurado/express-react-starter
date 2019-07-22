import React from 'react';

const User = ({user, deleteUser, history}) => {
    if (!user) return null;
    return (
        <div className="single-user">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        User Information
                    </h5>
                    <hr/>
                    <p>
                        <i className="fas fa-address-book"></i> First Name: {user.firstName}
                    </p>
                    <p>
                        <i className="fas fa-address-book"></i> Last Name: {user.lastName}
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i> Email: {user.email}
                    </p>
                    <div className="float-right">
                        <button className="btn btn-secondary">Edit</button>
                        <button className="btn btn-danger ml-3" onClick={ () => {deleteUser(user.id, history) } }>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;