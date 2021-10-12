import Star from "../Theme/icon/Star";
import PropTypes from "prop-types";
import '../Fovorite/Favorite.css'
import React, {useEffect, useState} from 'react';
import {connect, useSelector} from "react-redux";


const Favorite = (props) => {
    const [isIconActive, setIconActive] = useState(false)
    const {article, className, setItemFavorites} = props
    const ItemFavorites = useSelector(state => state.ItemFavorites)
    const items = useSelector(state => state.Products.data)

    useEffect(() => {
        if (ItemFavorites.data.find((card) => card.article === article)) {
            setIconActive(true);
        }
    }, [ItemFavorites.data, article]);

    const iconActive = () => {
        if (!isIconActive) {
            addFavorites(article);
            setIconActive(true);

        } else {
            deleteFavorites(article);
            setIconActive(false);
        }
    };

    const addFavorites = (id) => {
        if (!ItemFavorites.data.find((card) => card.article === id)) {
            const newCard = items.filter((card) => card.article === id)
            const [{...addToFavorite}] = newCard
            setItemFavorites([...ItemFavorites.data, addToFavorite])
            localStorage.setItem(
                'favorites',
                JSON.stringify([...ItemFavorites.data, addToFavorite])
            )
        }
    }

    const deleteFavorites = (id) => {
        setItemFavorites([
            ...ItemFavorites.data.filter((card) => card.article !== id)
        ])
        localStorage.setItem(
            'favorites',
            JSON.stringify([...ItemFavorites.data.filter((card) => card.article !== article)])
        )
    }

    return (
        <>
            <div className='Star' onClick={iconActive}>
                <Star
                    className={className}
                    filled={isIconActive}
                    type="star"
                />
            </div>
        </>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        setItemFavorites: (ItemFavorites) => dispatch({type: "SET_FAVORITES", payload: ItemFavorites}),
    }
}

Favorite.propTypes = {
    className: PropTypes.string.isRequired,
    article: PropTypes.number,
    addFavorites: PropTypes.func,
    deleteFavorites: PropTypes.func,
    ItemFavorites: PropTypes.array,
};

export default connect(null, mapDispatchToProps)(Favorite);

