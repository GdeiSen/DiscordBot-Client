import React from "react";
import "./Slice.scss"
const Slice = (props) => {
    return (
        <div className="slice-container">
            {props.children}
        </div>
    )

}

export default Slice