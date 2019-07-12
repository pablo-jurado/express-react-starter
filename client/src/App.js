import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './UserCard';

class App extends React.Component {
  state = {
    form: {
      "firstName": "",
      "lastName": "",
      "email": ""
    },
    users: []
  }

  componentDidMount() {
    axios.get('/users')
      .then((response) => {
        this.setState({ users: response.data })
      });
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
    const firstName = this.state.form.firstName;
    const lastName = this.state.form.lastName;
    const email = this.state.form.email;

    if (firstName === "" || lastName === "" || email === "") return

    axios.post('/add', {
      firstName: this.state.form.firstName,
      lastName: this.state.form.lastName,
      email: this.state.form.email,
    }).then((response) => {
      if (response.status === 200) {
        this.setState({
          users: response.data,
          form: {
            "firstName": "",
            "lastName": "",
            "email": ""
          }
        })
      }
    });
  }

  deleteUser = (id) => {
    axios.post('/delete', {"id": id})
      .then((response) => {
        if (response.status === 200) {

        } else {
          console.log('delete fail');
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
        </form>
        <hr/>
        <h1>Number of users: {this.state.users.length}</h1>
        <div className="card-wrapper">
        {this.state.users.map(user => <UserCard user={user} key={user.id} deleteUser={this.deleteUser} />)}
        </div>
      </div>
    );
  }
}

export default App;
