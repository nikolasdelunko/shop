import React, {useEffect, useState} from "react";
import "./Products.module.scss"
import PropTypes from "prop-types";
import Button from "../Button/button";
import Favorite from "../Fovorite/Favorite";
import {useSelector} from "react-redux";



const Product = (props) => {

    const {
        card: {title, price, article, url, color},
        onClick,
        deleteProduct,
        addFavorites,
        deleteFavorites,
        showFavIcon,
        showDelBtn,
        showBuyBtn,
        filled,
    } = props;
    const ItemCart = useSelector(state => state.ItemCart)


    const [disabled, setDisabled] = useState(null)
    useEffect(() => {
        const ItemCart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []
        if (ItemCart.find((card) => card.article === article)) {
            setDisabled("disabled")
        }
    }, [ItemCart, article])

    const onBtnClick = () => {
        onClick(article)
    }

    const deleteItem = () => {
        deleteProduct(article)
    }
    return (
        <div className='list-items'>
            <li className='card-product'>
                <div className='card-head'>
                    <h3>{title}</h3>
                    {showFavIcon && (
                        <Favorite
                            article={article}
                            title={title}
                            type="star"
                            addFavorites={addFavorites}
                            deleteFavorites={deleteFavorites}
                            className='Star'
                            filled={filled}
                            showFavIcon={true}
                        />)}
                </div>
                <div>
                    <img src={url} width="200" height="180" alt="laptop"/>
                </div>
                <span className='Color'>Color: {color}</span>
                <span className='Price'>Price: {price} $</span>
                <span>SKU: {article}</span>

                {showBuyBtn && (
                <Button
                    onClick={onBtnClick}
                    text={disabled ? 'In Cart' : 'Add to cart'}
                    classN='btn first'
                    disabled={disabled}
                />
                )}

                {showDelBtn && (
                    <Button
                        onClick={deleteItem}
                        text='Remove from cart'
                        classN='btn first'
                    />
                )}
            </li>

        </div>
    );

}


Product.propTypes = {
    card: PropTypes.shape({
        title: PropTypes.string,
        article: PropTypes.number,
        price: PropTypes.number,
        url: PropTypes.string,
        color: PropTypes.string,
    }),
};

export default Product;

