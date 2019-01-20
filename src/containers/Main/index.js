import React, { Component } from 'react';
import { connect } from 'react-redux';
import _usersActions from '../../store/actions/users.action';
import _nameActions from '../../store/actions/name.action';
import Header from './../../components/Header';
import Users from './../../components/Users';
import SelectedUser from './../../components/SelectedUser';

const userActions = new _usersActions();
const nameActions = new _nameActions();

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            first: '',
            last: ''
         }
    }
    selectedUser(index) {
        this.props.selectedUser(index);
    }
    render() { 
        const {name: storeName, users: storeUsers, selected, changeName, addUser} = this.props;
        const {name, first, last} = this.state;
        return (  
            <div>
                <Header name={storeName}/>
                <div className="container p-2">
                    <input type="text" placeholder="change your name" onChange={(event) => this.setState({name: event.target.value})}/>
                    <button onClick={() => changeName(name) }>Change</button>
                </div>
                <div className="container p-2">
                    <input type="text" placeholder="first name" onChange={(event) => this.setState({first: event.target.value}) }/>
                    <input type="text" placeholder="last name" onChange={(event) => this.setState({last: event.target.value}) }/>
                    <button onClick={() => addUser(first, last) }>addUser</button>
                </div>
                <SelectedUser user={storeUsers[storeUsers.findIndex(e => e.id === selected)]}/>
                <Users users={storeUsers} onSelect={(index) => this.selectedUser(index)}/>
            </div>
        );
    }
}
const mapStateToProps = state => {
    const {nameReducer, usersReducer} = state;
    return { 
        name: nameReducer.name,
        users: usersReducer.users,
        selected: usersReducer.selected
    }
}
const mapDispatchToProps = dispatch => {
    return { 
        changeName: (name) => dispatch(nameActions.changeName(name)),
        addUser: (first,last) => dispatch(userActions.addUser({first, last})),
        selectedUser: (index) => dispatch(userActions.selectedUser(index))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);