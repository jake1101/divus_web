import React from 'react';
import logo from '../image/logo/logo189x65.png'

function Header() {
    return(
        <header>
            <div id="headerCont">
                <div id="bg">
                    <div id="title">
                        <div className="headerText">
                            <a className="linkBtn" href="">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div id="sub">
                        <div className="headerText">
                            <h2>We are leading the image processing field as a deep learning.</h2>
                        </div>
                    </div>
                </div>
                
                <div id="menu">
                    <div id="hiddenItem">
                        <div id="hLogo">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                    <div id="menuBtn">
                        <span><a className="linkBtn" href=""><h3>PRODUCTS</h3></a></span>
                        <span><a className="linkBtn" href=""><h3>TECHNOLOGY</h3></a></span>
                        <span><a className="linkBtn" href=""><h3>CONTACT</h3></a></span>
                        <span><a className="linkBtn" href=""><h3>SERVICE</h3></a></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;