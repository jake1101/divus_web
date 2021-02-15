import React from 'react'
import logo from '../../../../image/logo/logo189x65.png';

export default function Header() {
    return (
        <header id="otherPage_header">
            <div id="otherPage_left">
                <a className="linkBtn" href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div id="otherPage_right">
                <div id="menuBtn">
                    <span><a className="linkBtn" href="/products"><h3>PRODUCTS</h3></a></span>
                    <span><a className="linkBtn" href="/technology"><h3>TECHNOLOGY</h3></a></span>
                    <span><a className="linkBtn" href=""><h3>CONTACT</h3></a></span>
                    <span><a className="linkBtn" href=""><h3>SERVICE</h3></a></span>
                </div>
            </div>

            <div id="header_right"></div>
        </header>
    )
}
