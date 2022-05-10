import React from "react";
import "./SliceCard.scss"
const SliceCard = (props) => {
    return (
        <div className="slice-card">
            <h4>{props.title}</h4>
            <p>{props.children}</p>
        </div>
    )

}

export default SliceCard