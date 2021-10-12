import './Button.scss'
import React from 'react';

const Button = (props) => {
    const {classN, text, disabled, onClick} = props
    return (
        <div className='btn-container'>
            <button
                className={classN}
                onClick={onClick}
                disabled={disabled}
            >{text}</button>
        </div>
    );
};

export default Button;
