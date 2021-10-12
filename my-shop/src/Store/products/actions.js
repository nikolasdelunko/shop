import types from './types'

const saveProducts = (products) => ({
    type: types.SAVE_PRODUCTS,
    payload: products
})

export default {
    saveProducts
}