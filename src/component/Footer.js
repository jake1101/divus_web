import React from 'react';
import logo from '../image/logo/logo189x65.png'

function Footer() {
    return(
        <footer>

            <div id="footerCont">
                <div>
                    <article id="footerLeftArticle">
                        <div id="footerLogo">
                            <img src={logo} alt="logo" />
                            <p>(주)디우스</p>
                        </div>
                        <div id="footerMenuBtn">
                            <span><a className="linkBtn" href=""><h3>PRODUCTS</h3></a></span>
                            <span><a className="linkBtn" href=""><h3>TECHNOLOGY</h3></a></span>
                            <span><a className="linkBtn" href=""><h3>CONTACT</h3></a></span>
                            <span><a className="linkBtn" href=""><h3>SERVICE</h3></a></span>
                        </div>
                    </article>
                    <article id="footerRightArticle">
                        <div id="footerAddress">
                            <p>Address:</p>
                            <h4>경기도 하남시 검단산로 239 하남시벤처센터 405호</h4>
                        </div>
                        <div id="footerEmail">
                            <p>E-mail:</p>
                            <h4>soju68@gmail.com</h4>
                        </div>
                    </article>
                    <article id="footerBottomArticle">
                        <p>© Copyright Divus Corp. All rights reserved.</p>
                    </article>
                </div>
            </div>
                
        </footer>
    )
}

export default Footer;