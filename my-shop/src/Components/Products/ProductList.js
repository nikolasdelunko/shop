import React from "react";
import Products from "./Products";
import Loader from "../Loader/Loader";
import {useSelector} from "react-redux";



const ProductList = (props) => {
    const {
        onClick,
        addFavorites,
        deleteFavorites,
    } = props


    const items = useSelector(state => state.Products.data)

const cards = items.map((item) => (
    <Products
        card={item}
        key={item.article}
        onClick={onClick}
        addFavorites={addFavorites}
        deleteFavorites={deleteFavorites}
        showFavIcon={true}
        showBuyBtn={true}
    />
));

    return (
            <div>
                <ul className='items-page'>{cards}</ul>
                    {cards.length === 0 && <Loader/>}
            </div>)

}




export default ProductList;

