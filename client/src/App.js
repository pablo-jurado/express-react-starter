import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import AppRouter from './components/Router';
import axios from 'axios';

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('/users')
      .then((response) => {
        this.setState({ users: response.data })
      });
  }

  deleteUser = (id) => {
    axios.post('/delete', {"id": id})
      .then((response) => {
        if (response.status === 200) {
          this.setState({ users: response.data.users })
        } else {
          console.log('delete fail');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render = () => (
    <>
      <AppRouter state={this.state} deleteUser={this.deleteUser} />
      {/* <UserList users={this.state.users} deleteUser={this.deleteUser}/> */}
    </>
  )
}

export default App;
