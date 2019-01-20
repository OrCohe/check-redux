export const ADD_USER = 'ADD_USER';
export const SELECTED_USER = 'SELECTED_USER';
export default class usersActions {
    addUser(data) {
        return {
            type: ADD_USER,
            payload: data
        }
    }
    selectedUser(index) {
        return {
            type: SELECTED_USER,
            payload: index
        }
    }
}

