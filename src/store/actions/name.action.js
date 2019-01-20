export const CHANGE_NAME = 'CHANGE_NAME';
export default class nameActions {
    changeName(name) {
        return {
            type: CHANGE_NAME,
            payload: {name, id:0},
        }
    }
}
