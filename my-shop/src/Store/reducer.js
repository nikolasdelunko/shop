import {combineReducers} from "redux";
import ItemCart from './cart'
import ItemFavorites from './favorites'
import Products from './products'
import modal from './modal'
import modalReg from './Registration'



const reducer = combineReducers({
    ItemCart,
    ItemFavorites,
    Products,
    modal,
    modalReg,
})


export default reducer
