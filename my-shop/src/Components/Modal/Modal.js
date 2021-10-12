import './Modal.scss'
import React from 'react';


import PropTypes from "prop-types";

const Modal = (props) => {
    const {onClick, header, text, actions} = props;
    const handleCloseClick = (e) => {
        if (
            e.target.getAttribute("class") === "modal" ||
            e.target.getAttribute("class") === "modalContent__modalClose"
        ) {
            onClick();
        }
    };
    return (
        <div className="modal" data-testid='modal' onClick={handleCloseClick}>
            <div className="modal__container">
                <div className="modal__header">
                    <span className='modal__header-title'>{header}</span>
                    <span className="modal__header-close" data-testid='modalClose' onClick={onClick}/>
                </div>
                <div className="modal__content">
                    <p className="modal__content-text">{text}</p>
                    <div className='modal__control'>
                        {actions}
                    </div>

                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    header: PropTypes.string,
    handleCloseClick: PropTypes.func,
    onClick: PropTypes.func,
};

export default Modal;

