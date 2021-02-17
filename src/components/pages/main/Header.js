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
`;

const StyledHeaderBg = styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
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

const HeaderBg = function() {
    return(
        <img src={sampleBg} />
    )
}

export default function Header(props) {
    return(
        <StyledHeader id="headerDiv">
            <StyledHeaderContent {...props}>
                <StyledHeaderBg>
                    <HeaderBg />
                </StyledHeaderBg>
                <HeaderLogo />
                <HeaderSub />
            </StyledHeaderContent>
            <Menu opa={0}/>
        </StyledHeader>
    )
}