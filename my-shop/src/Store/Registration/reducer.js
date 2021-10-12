const initialState = {
    modalReg: false,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MODAL_REG' : {
            return {...state, modalReg: action.payload}
        }
        default:
            return state
    }
}

export default reducer