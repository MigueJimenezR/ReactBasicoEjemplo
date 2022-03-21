import React from "react";
import './Label.css';

const Label = ({text}) => {
    return(
        <div className="login-label-container">
            <label className="login-label">{text}</label>
        </div>
    )
};
export default Label;