import React from 'react';

import './Footer.css';
function Footer(props) {
    return (
        <div className="main-footer">
            <form className="subscribe-form">
                <span
                style={{fontSize:35,color:'#7A129F'}}
                >Subscribe to our newsletters</span>
                <div className="subscribe-details">
                <input className="email" type="email" placeholder="Enter your email" name="email"/>
                <div type="button" className="btn-submit"><span>Subscribe</span></div>
                </div>
            </form>
            <div className="footer-content">
                <div className="social-icons">
                <ul>
                        <li><a href="/"><img src={require("../../assets/icons/Twitter.svg").default} alt="twitter"/></a></li>
                        <li><a href="/"><img src={require("../../assets/icons/Facebook Circled.svg").default} alt="twitter"/></a></li>
                        <li><a href="/"><img src={require("../../assets/icons/Instagram Circle.svg").default} alt="twitter"/></a></li>
                </ul>
                </div>
                <div className="copyright">
                    <p>Copyright &copy; 2021. All Rights Reserved | Terms & Conditions</p>
                </div>
                <div>
                    <a href="/">
                    <img src={require('../../assets/icons/logo.svg').default} alt="logo"
                    style={{padding:20}}
                    />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;