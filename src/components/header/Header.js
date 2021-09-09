import React from 'react';

import './Header.css';
function Header(props) {
    return (
        <div className="container-fluid header">
            <div className="row align-items-center">
                <div className="col-5">
                    <input id="search" type="text" className="search" placeholder="Search ..."
                    />
                </div>
                <div className="col-4">
                    <a href="/">
                    <img src={require('../../assets/icons/logo.svg').default} alt="logo"
                    />
                    </a>
                </div>
                <div className="col-2">
                    <ul>
                        <li><a href="/"><img src={require("../../assets/icons/Twitter.svg").default} alt="twitter"/></a></li>
                        <li><a href="/"><img src={require("../../assets/icons/Facebook Circled.svg").default} alt="twitter"/></a></li>
                        <li><a href="/"><img src={require("../../assets/icons/Instagram Circle.svg").default} alt="twitter"/></a></li>
                    </ul>
                </div>
                <div className="col-1">
                    <img src={require("../../assets/icons/Menu Rounded.svg").default} alt="menu"
                    style={{width:40,height:40}}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;