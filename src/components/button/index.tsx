import React from "react";
import "./button.style.css";

type props = {
    title: string,
    icon?:string
}

export const Button: React.FC<props> =({icon, title})=>{
    return(
        <div className="button-container">

            {icon && <img src={icon} className="button-icon" alt="button icon"/>}
            <p className="button-title">{title}</p>
        </div>
    )
}
