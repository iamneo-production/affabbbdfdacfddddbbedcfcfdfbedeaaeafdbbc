import React from 'react'
import { useState } from 'react';

// const Button: React.FC<ButtonProps> = ({onClick, text}) => {
//     return <>
//     <button onClick= {onClick}>{ButtonFunc(text)}</button>
//     </>;
// };

// interface ButtonProps {
//     onClick: () => void;
//     text : String;
// }
const Button = (ButtonProps) => {

    
    const ButtonFunc = (text) => {
        if(text === ""){
            return "Button Works";
        } else {
            return text;
        }
    }
    return (<button onClick = {() => {}}>{ButtonProps.children}</button>);
}

export default Button;