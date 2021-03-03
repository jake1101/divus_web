import React from 'react';
import Menu from '../publicComp/Menu';
import styled from 'styled-components';

import bg from '../../image/type2.gif';

const StyledHeader = styled.header`
    height: 727px;
    text-align: center;
    padding: 0;
    margin: 0;
`;

const StyledHeaderContent = styled.div`
    height: 530px;
    padding: 120px 0 30px 0;
`;

const StyledBgImg = styled.img`
    height: 100%;
    box-shadow: 0px 0px 300px 260px #222;
    border-radius: 100px;
`;

const HeaderBg = function () {
    return (
        <StyledBgImg src={bg} alt="backgroundgjf" />
    )
}

export default function Header() {
    return (
        <StyledHeader className="headerDiv">
            <StyledHeaderContent className="header">
                <HeaderBg />
            </StyledHeaderContent>
            <Menu opa={0} />
        </StyledHeader>
    )
}