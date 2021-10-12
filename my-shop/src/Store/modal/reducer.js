const initialState = {
    modal: false,
    modalCart: false,
    currentId: [],
    currentName: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MODAL' : {
            return {...state, modal: action.payload}
        }
        case 'SET_MODAL_CART' : {
            return {...state, modalCart: action.payload}
        }
        case 'SET_CURRENT_ID' : {
            return {...state, currentId: action.payload}
        }
        case 'SET_CURRENT_NAME' : {
            return {...state, currentName: action.payload}
        }
        default:
            return state
    }
}

export default reducer