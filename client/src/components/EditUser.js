import React from 'react';

class EditUser extends React.Component {
    state = {
      form: {
        "firstName": this.props.user.firstName,
        "lastName": this.props.user.lastName,
        "email": this.props.user.email
      },
    }

    render() {
        return (
            <div className="single-user">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            User Information
                        </h5>
                        <form>
                            <div className="form-group">
                                <label htmlFor="first-name">First Name</label>
                                <input
                                    className="form-control"
                                    id="first-name"
                                    name="firstName"
                                    type="text"
                                    onChange={() => {}}
                                    value={this.state.form.firstName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input className="form-control"
                                    id="last-name"
                                    name="lastName"
                                    type="text"
                                    onChange={() => {}}
                                    value={this.state.form.lastName} />
                                </div>
                                <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input className="form-control"
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={() => {}}
                                    value={this.state.form.email} />
                            </div>
                            <div>
                                <button className="btn btn-primary" onClick={ () => {  } }>Save</button>
                                <button className="btn btn-secondary ml-3" onClick={ () => { this.props.toggleEdit() } }>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}    

export default EditUser;