import React from 'react';
const Users = ({users, onSelect}) => {
        return users.length > 0 ? 
            <ul className="container list-group p-2">
                {users.map(({first, last, id}) => <li onClick={() => onSelect(id)} className="list-group-item" key={id}>firstName: {first}, lastName: {last}</li>)}
            </ul> : null
}
 
export default Users;