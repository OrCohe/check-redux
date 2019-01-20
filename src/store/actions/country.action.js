import axios from 'axios';

export const SEARCH_COUNTRY = 'SEARCH_COUNTRY';
export const SEARCH_COUNTRY_SUCCESS = 'SEARCH_COUNTRY_SUCCESS';
export const SEARCH_COUNTRY_FAIL = 'SEARCH_COUNTRY_FAIL';

export default class nameActions {
    searchCountry(name) {  
        return dispatch => {
            dispatch(this.setLoader());  
            axios.get(`http://restcountries.eu/rest/v2/name/${name}`)
                .then(response  => dispatch(this.searchCountryOnSuccess(response)))
                .catch(() => dispatch(this.searchCountryOnFail()));
        }
    }
    setLoader() {
        return {
            type: SEARCH_COUNTRY
        }
    }
    searchCountryOnSuccess(data) {
        const {name, flag: src} = data.data[0];
        const newData = { name, src }
        return {
            type: SEARCH_COUNTRY_SUCCESS,
            payload: newData
        }
    }
    searchCountryOnFail() {
        return {
            type: SEARCH_COUNTRY_FAIL
        }
    }
}
