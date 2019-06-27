import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    form: {
      "first-name": "",
      "last-name": "",
      "email": ""
    },
    users: []
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  handleFormChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState((state) => {
      let newState = Object.assign({}, state);
      return newState.form[name] = value;
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.form);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              className="form-control"
              id="first-name"
              name="first-name"
              type="text"
              onChange={this.handleFormChange}
              value={this.state.form["first-name"]} />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input className="form-control"
              id="last-name"
              name="last-name"
              type="text"
              onChange={this.handleFormChange}
              value={this.state.form["last-name"]} />
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
        </form>
        <hr/>
        <h1>Users</h1>
        <div className="card-wrapper">
        {this.state.users.map(user =>
          <div key={user.id} className="card">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-user"></i> Name: {user.first_name} {user.last_name}
              </h5>
              <p>
                <i className="fas fa-envelope"></i> Email: {user.email}
              </p>
            </div>
          </div>

          )}
        </div>
      </div>
    );
  }
}

export default App;
