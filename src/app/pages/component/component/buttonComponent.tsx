import React from "react";

type btype = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const ButtonComponent = ({...rest}:btype)=>{
    return <button {...rest}/>
    
}


export default ButtonComponent;