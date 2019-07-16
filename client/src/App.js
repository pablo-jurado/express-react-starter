import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        <Route path="/" exact render={()=> (<UserList users={this.state.users}/>)}  />
        <Route path="/add/" render={()=> (<UserForm/>)} />
      </div>
    </Router>
  )
}

export default App;
