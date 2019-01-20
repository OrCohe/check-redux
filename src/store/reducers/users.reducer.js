import { ADD_USER, SELECTED_USER } from './../actions/users.action';
const initialState = {
    users: [],
    lastIndex: 0,
    selected: null
}

const usersReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users].concat({...payload, id: state.lastIndex++}),
                lastIndex: state.lastIndex++
            }
        case SELECTED_USER:
            return {
                ...state,
                selected: payload
            }
        default:
            return state;
    }
}

export default usersReducer;