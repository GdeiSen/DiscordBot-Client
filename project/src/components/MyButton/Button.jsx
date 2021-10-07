import React from 'react';
import '../MyButton/Button.css'
function Button(props) {
  return <div className = {"ButtonDiv"}><button className = {props.className}>{props.children}</button></div>;
}
/*class ButtonClass extends React.Component{
    render(props){
        return <div><button>{props.label}</button></div>;
    }
}*/
export default Button;