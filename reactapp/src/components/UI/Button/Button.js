import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const ButtonFunc = (text) => {
  if (text === "") {
    return "Button Works";
  } else {
    return text;
  }
};

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return <button onClick={onClick}>{ButtonFunc(text)}</button>;
};

export default Button;
