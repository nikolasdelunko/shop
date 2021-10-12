import React from 'react';
import './Favorites.css'
import Products from "../../Components/Products/Products";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const Cart = (props) => {
    const {deleteFavorites, onClick} = props;

    const ItemFavorites = useSelector(state => state.ItemFavorites.data)
    const cards = ItemFavorites.map((item) => (
        <Products
            card={item}
            onClick={onClick}
            key={item.article}
            deleteFavorites={deleteFavorites}
            porductsFavorites={ItemFavorites}
            productsCart={ItemFavorites}
            showFavIcon={true}
            showBuyBtn={true}
        />
    ));
    return <ul className='items-page'>{cards}</ul>;
};

Cart.propTypes = {
    deleteFavorites: PropTypes.func,
    items: PropTypes.array,
    onClick: PropTypes.func,
};

export default Cart;

