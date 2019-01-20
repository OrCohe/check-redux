import React from 'react';
class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: ''
         }
    }
    render() { 
        return ( 
            <div>
                <input type="text" placeholder="Search for Country" onChange={(event) => this.setState({name: event.target.value})}/>
                <button onClick={() => this.props.onSearch(this.state.name)}>Search</button>
            </div>
         );
    }
}
 
export default SearchInput;
 