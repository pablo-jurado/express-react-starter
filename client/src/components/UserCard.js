import React from 'react';
import { Link } from "react-router-dom";

const UserCard = ({user}) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">
            <i className="fas fa-user"></i> Name: {user.firstName} {user.lastName}
            </h5>
            <p>
            <i className="fas fa-envelope"></i> Email: {user.email}
            </p>
            <Link className="btn btn-secondary float-right" to={ `/user/${user.id}` }>Details</Link>
        </div>
    </div>
)

export default UserCard;