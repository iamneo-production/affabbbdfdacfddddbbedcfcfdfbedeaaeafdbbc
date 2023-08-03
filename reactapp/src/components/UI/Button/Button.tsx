import React from 'react';

interface ButtonProps {
    onClick: () => void;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
    const buttonText = text === "" ? "Button Works" : text;

    return (
        <button onClick={onClick}>
            {buttonText}
        </button>
    );
};

export default Button;
