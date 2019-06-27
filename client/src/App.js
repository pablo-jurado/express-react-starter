import React from 'react';
import './App.css';

class App extends React.Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label for="first-name">First Name</label>
            <input className="form-control" id="first-name" name="first-name" type="text" />
          </div>
          <div className="form-group">
            <label for="last-name">Last Name</label>
            <input className="form-control" id="last-name" name="last-name" type="text" />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input className="form-control" type="email" id="email" name="email" type="text" />
          </div>
          <input className="btn btn-primary"type="submit" value="Add User" />
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
