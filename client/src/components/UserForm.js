import React from 'react';
import { Link } from "react-router-dom";

class UserForm extends React.Component {
  state = {
    form: {
      "firstName": "",
      "lastName": "",
      "email": ""
    },
  }
  
  handleFormChange = (e) => {
    const {value, name} = e.target;

    this.setState((state) => {
      let newState = Object.assign({}, state);
      return newState.form[name] = value;
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {firstName, lastName, email} = this.state.form;

    if (firstName === "" || lastName === "" || email === "") return

    this.props.addUser({ firstName, lastName, email }, this.props.history);

    this.setState({
      form: {
          "firstName": "",
          "lastName": "",
          "email": "",
      }
    })
  }
  
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                className="form-control"
                id="first-name"
                name="firstName"
                type="text"
                onChange={this.handleFormChange}
                value={this.state.form.firstName} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input className="form-control"
                id="last-name"
                name="lastName"
                type="text"
                onChange={this.handleFormChange}
                value={this.state.form.lastName} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-control"
                id="email"
                name="email"
                type="email"
                onChange={this.handleFormChange}
                value={this.state.form.email} />
            </div>
            <input className="btn btn-primary"
              type="submit"
              value="Add User" />
            <Link className="btn btn-danger ml-3" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    );
  }
}
  
  export default UserForm;
  