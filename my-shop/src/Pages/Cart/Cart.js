import React from 'react';
import './Cart.css'
import Product from "../../Components/Products/Products";
import PropTypes from "prop-types";
import {useSelector, connect} from "react-redux";
import Button from "../../Components/Button/button";
import Modal from "../../Components/Modal/Modal";
import Registration from "../../Components/RegForm/Registration";


const Cart = (props) => {
        const {deleteProduct, setModalReg} = props;

        const ItemCart = useSelector(state => state.ItemCart.data)
        const modalReg = useSelector(state => state.modalReg.modalReg)


        const openModal = () => {
            setModalReg(true)
        }

        const cards = ItemCart.map((item) => (
            <Product
                card={item}
                key={item.article}
                deleteProduct={deleteProduct}
                productsCart={ItemCart}
                showFavIcon={false}
                showDelBtn={true}
            />
        ));
        return (
            <div>
                <ul className='items-page'>{cards}</ul>
                <div className='Cart-btn'>
                    {cards.length >= 1 && <Button
                        text='Buy'
                        classN='btn first'
                        onClick={openModal}
                    />}</div>
                {modalReg && (
                    <div className='list-items'>
                        <Modal
                            header={"REGISTER BEFORE BUY"}
                            onClick={() => {
                                setModalReg(false)
                            }}
                            closeButton={true}
                            modalClose={() => {
                                setModalReg(false)
                            }}
                            // text={`pls Register`}
                            actions={
                                <>
                                    <Registration
                                        deleteProduct={deleteProduct}
                                    />
                                    {/*<p>asdfasfsdf</p>*/}
                                    {/*<Button*/}
                                    {/*    text='Delete'*/}
                                    {/*    classN='modal__control-btn'*/}
                                    {/*/>*/}
                                    {/*<Button*/}
                                    {/*    text='Cancel'*/}
                                    {/*    classN='modal__control-btn'*/}
                                    {/*/>*/}
                                </>
                            }
                        />
                    </div>
                )}
            </div>
        );
    }
;

Cart.propTypes =
    {
        deleteProduct: PropTypes.func,
        items: PropTypes.array,
}



const mapDispatchToProps = (dispatch) => {
    return {
        setModalReg: (Modal) => dispatch({type: "SET_MODAL_REG", payload: Modal}),
    }
}

export default connect(null, mapDispatchToProps)(Cart);
