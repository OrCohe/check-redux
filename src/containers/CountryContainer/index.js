import React, { Component } from 'react';
import { connect } from 'react-redux';
import _countryActions from '../../store/actions/country.action';
import Header from './../../components/Header';
import SearchInput from './../../components/SearchInput';
import Country from './../../components/Country';

const countryActions = new _countryActions();


class CountryContainer extends Component {
    searchCountry(name) {
        this.props.searchCountry(name);
    }
    render() { 
        return (
            <div>
                <Header name="Test"/>
                <div className="container">
                    <div className="row p-3">
                        <div className="col">
                            <SearchInput onSearch={(name) => this.searchCountry(name)}/>
                        </div>
                        <div className="col">
                            <Country src={this.props.data.src} name={this.props.data.name} loading={this.props.loading} status={this.props.status}/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    const {countryReducer} = state;
    return { 
        loading: countryReducer.loading,
        status: countryReducer.status,
        data: countryReducer.data
    }
}
const mapDispatchToProps = dispatch => {
    return { 
        searchCountry: (name) => dispatch(countryActions.searchCountry(name)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountryContainer);