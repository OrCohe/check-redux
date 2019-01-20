import { CHANGE_NAME } from './../actions/name.action';

const initialState = {
    name: 'or'
}

const nameReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case CHANGE_NAME:
            const {name} = payload;
            return {
                ...state,
                name
            }
        default:
            return state;
    }
}

export default nameReducer;