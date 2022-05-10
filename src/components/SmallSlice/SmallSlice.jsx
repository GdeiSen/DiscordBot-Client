import React from "react";
import "./SmallSlice.scss"
const SmallSlice = (props) => {
    return (
        <div className="small-slice-container">
            {props.children}
        </div>
    )

}

export default SmallSlice