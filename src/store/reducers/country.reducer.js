import { SEARCH_COUNTRY, SEARCH_COUNTRY_FAIL, SEARCH_COUNTRY_SUCCESS } from './../actions/country.action';

const initialState = {
    loading: false,
    status: true,
    data: {
        name: '',
        src: ''
    }
}

const countryReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SEARCH_COUNTRY:
            return {
                ...state,
                loading: true
            }
        case SEARCH_COUNTRY_SUCCESS:
            return {
                ...state,
                loading: false,
                status: true,
                data: payload
            }
        case SEARCH_COUNTRY_FAIL:
            return {
                ...state,
                loading: false,
                status: false
            }
        default:
            return state;
    }
}

export default countryReducer;