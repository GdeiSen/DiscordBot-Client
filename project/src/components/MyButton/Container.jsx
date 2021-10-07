import React from 'react';
import '../MyButton/Button.css'
function Container(props) {
    return <div className = "container">{props.children}</div>
}
export default Container;