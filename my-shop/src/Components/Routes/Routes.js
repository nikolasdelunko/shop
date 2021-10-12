import React from 'react';
import {Redirect, Route} from "react-router-dom";
import Cart from "../../Pages/Cart/Cart";
import Favorites from "../../Pages/Favorites/Favorites";
import ProductList from "../Products/ProductList";


const Routes = (props) => {
    const {onClick, deleteProduct, addFavorites, deleteFavorites, } = props
    return (
        <div className='Main'>
            <div>
                <Redirect exact from='/' to='/shop'/>
                <Route exact path='/shop'
                       render={() => (
                           <ProductList
                               onClick={onClick}
                               addFavorites={addFavorites}
                               deleteFavorites={deleteFavorites}
                           />
                       )}
                />
                <Route exact path='/cart'
                       render={() => (<Cart
                               deleteProduct={deleteProduct}
                />
                )}
                    />
                <Route exact path='/favorites'
                render={() => (<Favorites
                        onClick={onClick}
                    />
                )}
                />
            </div>
        </div>
    );
};

export default Routes;