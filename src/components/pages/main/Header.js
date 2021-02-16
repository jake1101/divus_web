import React from 'react';
import Menu from '../public/Menu';
import styled from 'styled-components';

import logo from '../../../image/logo/logo189x65.png';

const StyledHeader = styled.header`
    height: 727px;
    top: 0;
    left: 0;
    text-align: center;
    background: #888;
    padding: 0;
    margin: 0;
`;

const StyledHeaderContent = styled.div`
    height: 590px;
`;

const HeaderLogoStyle  = {
    marginTop: "400px"
}

const HeaderSubStyle = {
    paddingTop: "30px"
}

const HeaderLogo = function() {
    return(
        <a href="/"><img style={HeaderLogoStyle} src={logo} alt="logo" /></a>
    )
}

const HeaderSub = function() {
    return(
        <h2 style={HeaderSubStyle}>We are leading the image processing field as a deep learning.</h2>
    )
}

export default function Header() {
    return(
        <StyledHeader id="header">
            <StyledHeaderContent>
                <HeaderLogo />
                <HeaderSub />
            </StyledHeaderContent>
            <Menu opa={0}/>
        </StyledHeader>
    )
}