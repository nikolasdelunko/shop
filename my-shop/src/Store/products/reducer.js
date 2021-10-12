const initialState = {
    data: [],
    isLoading: true,
    error: null

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS' : {
            return {...state, data: action.payload, isLoading: false}
        }
        default:
            return state
    }
}


export default reducer