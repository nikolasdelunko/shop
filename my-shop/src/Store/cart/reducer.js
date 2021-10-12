const initialState = {
        data: [],
        isLoading: true,
        error: null
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CART' : {
            return {...state, data: action.payload, isLoading: false}
        }
        case 'DEL_CART' : {
            return {...state, data: [], isLoading: false}
        }
        default:
            return state
    }
}


export default reducer