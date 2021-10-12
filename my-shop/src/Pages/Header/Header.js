import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.css";
import Cart from "../../Components/Theme/icon/Cart";
import Favorites from "../../Components/Theme/icon/Favorites";
import {useSelector} from "react-redux";


const Header = () => {
    const ItemFavorites = useSelector(state => state.ItemFavorites)
    const ItemCart = useSelector(state => state.ItemCart)
    return (
        <div className='nav-bar'>
            <nav>
                <ul className='nav-links'>
                    <li className='nav-li'><NavLink to='/shop'><img className='Logo' alt='Logo-img'
                                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPSekT4rGWEIkVzVcmFQ5JSFrPln_au7Fn6Nta5zdfpDcRpWOjTZD-TxdmFmceU7KBAY&usqp=CAU"/></NavLink>
                    </li>
                    <li className='nav-li'><NavLink to='/favorites'><Favorites/><p
                        className='Head-li-text'>{ItemFavorites.data.length}</p></NavLink></li>
                    <li className='nav-li'><NavLink to='/cart'><Cart/><p className='Head-li-text'>{ItemCart.data.length}</p>
                    </NavLink></li>
                </ul>
            </nav>

        </div>
    );
};


export default Header;