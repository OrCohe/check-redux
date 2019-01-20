import React from 'react';
const Header = ({name}) => {
    return (  
        <header className="nav navbar bg-dark text-white justify-content-center">
            <span>Hello {name}</span> 
        </header>
    );
}
 
export default Header;