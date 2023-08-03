import React from 'react';

const Button = ({ onClick, text }) => {
    const buttonText = text === "" ? "Button Works" : text;

    return (
        <button onClick={onClick}>
            {buttonText}
        </button>
    );
};

export default Button;
