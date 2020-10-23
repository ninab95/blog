import React from 'react'
import './Logo.scss';

function Logo() {
    return (
        <div className="logo">
        <img src={require("../../img/logo.png")} alt="logo" />
      </div>
    )
}

export default Logo;