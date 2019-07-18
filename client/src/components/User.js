import React from 'react';
import { Link } from "react-router-dom";

const User = ({user}) => {
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
                        <i class="fas fa-address-book"></i> First Name: {user.firstName}
                    </p>
                    <p>
                        <i class="fas fa-address-book"></i> Last Name: {user.lastName}
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i> Email: {user.email}
                    </p>
                    <div className="float-right">
                        <button className="btn btn-secondary">Edit</button>
                        <button className="btn btn-danger ml-3">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default User;