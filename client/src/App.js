import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import User from './components/User';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios.get('/users')
      .then((response) => {
        this.setState({ users: response.data });
      });
  }

  deleteUser = (id, history) => {
    axios.post('/delete', {"id": id})
      .then((response) => {
        if (response.status === 200) {
          this.setState({ users: response.data.users });
          history.push("/");
        } else {
          console.log('delete fail');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateUser = (user, history) => {
    axios.post('/update', {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      id: user.id
    }).then((response) => {
        if (response.status === 200 && response.data) {
            this.setState({
                users: response.data,
                form: {
                    "firstName": "",
                    "lastName": "",
                    "email": ""
                }
            })

            this.getUsers();
            history.push("/");
        }
    });
  }

  render = () => (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add/">Add User</Link>
            </li>
          </ul>
        </nav>
        <main className="container">
          <Route path="/" exact render={()=> (<UserList users={this.state.users}/>)}  />
          <Route path="/add/" render={(props)=> (<UserForm history={props.history} getUsers={this.getUsers} />) } />
          <Route path="/user/:id" render={(props) => {
            const id = props.match.params.id;
            const userData = this.state.users.find(user => user.id === id);
            return <User user={userData} history={props.history} deleteUser={this.deleteUser} updateUser={this.updateUser} getUsers={this.getUsers} />
          }} />
        </main>
      </div>
    </Router>
  )
}

export default App;
