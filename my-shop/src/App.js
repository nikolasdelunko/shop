import "./App.css";
import React, {useEffect} from 'react';
import Routes from "./Components/Routes/Routes";
import Header from "./Pages/Header/Header";
import Footer from './Pages/Footer/Footer'
import axios from "axios";
import Modal from "./Components/Modal/Modal";
import Button from "./Components/Button/button";
import {connect, useDispatch, useSelector} from "react-redux";


const App = ({setItemFavorites, setItemCart, setModal, setModalCart , setCurrentId, setCurrentName}) => {
    const currentName = useSelector(state => state.modal.currentName)
    const currentId = useSelector(state => state.modal.currentId)
    const modalCart = useSelector(state => state.modal.modalCart)
    const ItemCart = useSelector(state => state.ItemCart)
    const ItemFavorites = useSelector(state => state.ItemFavorites)
    const items = useSelector(state => state.Products.data)
    const modal = useSelector(state => state.modal.modal)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            axios('/Goods.json')
                .then(res => {
                    dispatch({type: 'SET_PRODUCTS', payload: res.data});
                })
        }, 1500)
        if (!localStorage.getItem("cart")) localStorage.setItem("cart", "[]");
        if (!localStorage.getItem("favorites")) localStorage.setItem("favorites", "[]");

    }, [dispatch])
    const addToCart = (currentId) => {
        if (!ItemCart.data.find((card) => card.article === currentId)) {
            const newCard = items.filter((card) => card.article === currentId)
            const [{...addToCard}] = newCard
            setItemCart([...ItemCart.data, addToCard])
            localStorage.setItem(
                "cart",
                JSON.stringify([...ItemCart.data, addToCard])
            )
            setModal(false)
        }
    }

    const addFavorites = (id) => {
        if (!ItemFavorites.find((card) => card.article === id)) {
            const newCard = items.filter((card) => card.article === id);
            const [{...addToFavorite}] = newCard;
            setItemFavorites([...ItemFavorites, addToFavorite]);
            localStorage.setItem(
                "favorites",
                JSON.stringify([...ItemFavorites, addToFavorite])
            );
        }
    };

    const deleteProduct = (currentId) => {
        setItemCart([...ItemCart.data.filter((card) => card.article !== currentId)])
        localStorage.setItem(
            "cart",
            JSON.stringify([...ItemCart.data.filter((card) => card.article !== currentId)])
        )
        modalCloseCart()
    }

    const deleteFavorites = (id) => {
        setItemFavorites([
            ...ItemFavorites.filter((card) => card.article !== id)
        ])
    }

    const openModal = (id) => {
        setModal(true)
        const newCard = items.filter((card) => card.article === id)
        const [{...addToCard}] = newCard
        setCurrentId(addToCard.article)
        setCurrentName(addToCard.title)
    }

    const openDeleteModal = (id) => {
        setModalCart(true)
        const newCard = items.filter((card) => card.article === id)
        const [{...addToCard}] = newCard
        setCurrentId(addToCard.article)
    }

    const modalClose = () => {
        setModal(false)
    }
    const modalCloseCart = () => {
        setModalCart(false)
    }


    return (
        <>
            <div>
                <Header/>
                <Routes
                    ItemCart={ItemCart.data}
                    onClick={openModal}
                    deleteProduct={openDeleteModal}
                    addToFavorites={addFavorites}
                    deleteFavorites={deleteFavorites}

                />
                {modal && (
                    <div className='list-items'>
                        <Modal
                            header={"Confirm you choice"}
                            modalOne={true}
                            onClick={modalClose}
                            closeButton={true}
                            modalClose={modalClose}
                            text={`Do you wont add ${currentName} to cart?`}
                            actions={
                                <>
                                    <Button
                                        onClick={() => addToCart(currentId)}
                                        text='Add'
                                        classN='modal__control-btn'
                                    />
                                    <Button
                                        onClick={() => modalClose()}
                                        text='Cancel'
                                        classN='modal__control-btn'
                                    />
                                </>
                            }
                        />
                    </div>
                )}
                {modalCart && (
                    <div className='list-items'>
                        <Modal
                            header={"Confirm you choice"}
                            modalOne={true}
                            onClick={modalCloseCart}
                            closeButton={true}
                            modalClose={modalClose}
                            text={`Do you wont remove ${currentName} from  cart?`}
                            actions={
                                <>
                                    <Button
                                        onClick={() => deleteProduct(currentId)}
                                        text='Delete'
                                        classN='modal__control-btn'
                                    />
                                    <Button
                                        onClick={() => modalCloseCart()}
                                        text='Cancel'
                                        classN='modal__control-btn'
                                    />
                                </>
                            }
                        />
                    </div>
                )}
                {items.length !== 0 && <Footer/>}

            </div>

        </>
    );

}


const mapDispatchToProps = (dispatch) => {
    return {
        setItemFavorites: (ItemFavorites) => dispatch({type: "SET_FAVORITES", payload: ItemFavorites}),
        setItemCart: (ItemCart) => dispatch({type: "SET_CART", payload: ItemCart}),
        setModal: (Modal) => dispatch({type: "SET_MODAL", payload: Modal}),
        setModalCart: (modalCart) => dispatch({type: "SET_MODAL_CART", payload: modalCart}),
        setCurrentId: (currentId) => dispatch({type: "SET_CURRENT_ID", payload: currentId}),
        setCurrentName: (currentName) => dispatch ({type: "SET_CURRENT_NAME", payload: currentName})
    }
}

export default connect(null, mapDispatchToProps)(App);


