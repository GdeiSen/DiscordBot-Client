import React from "react";
import "./TextCard.scss"
const TextCard = (props) => {
    return (
        <div className="text-container">
            {props.children}
        </div>
    )

}

export default TextCard