import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UsersList from "./UserList";
import UserForm from "./UserForm";


function AppRouter(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
                <Link to={ { pathname: "/", state: props.state} } >
                  Home
                </Link>
            </li>
            <li>
                <Link to={ { pathname: "/add/", state: props.state } }>
                    Add User
                </Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={UsersList} />
        <Route path="/add/" component={UserForm} />
      </div>
    </Router>
  );
}

export default AppRouter;