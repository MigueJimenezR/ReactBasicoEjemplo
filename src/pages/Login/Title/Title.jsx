import React from "react";
import './Title.css';

const Title = ({text}) => {
    return(
        <div className="login-label-container">
            <h1 className="login-h1">{text}</h1>
        </div>
    )
};
export default Title;