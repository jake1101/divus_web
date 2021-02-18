import React from 'react';
import Menu from '../public/Menu';
import styled from 'styled-components';

import sampleBg from '../../../image/sample_bg.jpg';
import logo from '../../../image/logo/logo189x65.png';

const StyledHeader = styled.header`
    height: 727px;
    text-align: center;
    padding: 0;
    margin: 0;
`;

const StyledHeaderContent = styled.div`
    height: 590px;
    background-image: url(${sampleBg});
    background-repeat: no-repeat;
    background-size: cover;
`;

const HeaderLogoStyle  = {
    marginTop: "400px",
    backgroundColor: "rgba(255,255,255,0.7)"
}

const HeaderSubStyle = {
    paddingTop: "30px",
    backgroundColor: "rgba(255,255,255,0.7)"
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

export default function Header(props) {
    return(
        <StyledHeader id="headerDiv">
            <StyledHeaderContent {...props}>
                <HeaderLogo />
                <HeaderSub />
            </StyledHeaderContent>
            <Menu opa={0}/>
        </StyledHeader>
    )
}