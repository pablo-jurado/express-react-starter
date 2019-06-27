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
      <div>
        <h1>Users</h1>
        <ul>
        {this.state.users.map(user =>
          <li key={user.id}>Name: {user.first_name} {user.last_name} | Email: {user.email}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;