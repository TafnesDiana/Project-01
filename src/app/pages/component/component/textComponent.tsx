
import React from "react";

type ptype = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

interface Props extends ptype{

}

const TextComponent:React.FC<Props> = ({...rest}:ptype)=>{
    return<p {...rest}/>

}

export default TextComponent;