import React from 'react';
const Country = ({src, name ,loading, status}) => {
    if (loading) {
        return (
            <p>Loading....</p>
        )
    }
    if (!status) {
        return (
            <p>Faild to load this country</p>
        )
    }
    if (status && src) {
        return (
            <div>
                <p>name: {name}</p>
                <img src={src} alt={name} height="300px" width="300px"/>
            </div>
        )
    } return (
        <p>Enter country above</p>
    )
}
 
export default Country;