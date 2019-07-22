import React from 'react';
import EditUser from './EditUser';
import UserInfo from './UserInfo';

class User extends React.Component {
    state = {
        edit: false
    }

    toggleEdit = () => {
        this.setState({ edit: !this.state.edit });
    }

    render() {
        const edit = this.state.edit;
        return (
            <div>
              {edit ? (
                <EditUser user={ this.props.user } toggleEdit={ this.toggleEdit } />
              ) : (
                <UserInfo user={ this.props.user } history={ this.props.history } deleteUser={ this.props.deleteUser } toggleEdit={ this.toggleEdit }/>
              )}
            </div>
          );
    }
}

export default User;
