import React from 'react';
const SelectedUser = ({user}) => {
    return user ? 
        <div className="card" style={{width: '200px'}}>
            <div className="card-body">
                <p>{user.first}</p>
                <p>{user.last}</p>
                <p>{user.id}</p>
            </div>
        </div>
     : null
}
 
export default SelectedUser;