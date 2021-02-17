let defaultState = {
    dataUser : []
}

const userReducer = (state=defaultState, action) => {
    switch (action.key) {
        case 'EDIT_USER':
            return{
                ...state
            }
        case 'DELETE_USER':
            return{
                ...state
            } 
        default:
            return state
    }
}

export default userReducer