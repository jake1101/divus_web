import React from 'react';
import Menu from '../publicComp/Menu';
import styled from 'styled-components';

import bg from '../../image/type2.gif';

const StyledHeader = styled.header`
    padding: 0;
    margin: 0
`;

const StyledHeaderContent = styled.div`
    height: ${props => props.height}px;
    padding: ${props => props.padding}px;
    border-bottom: none;
    background: white;
`;

const StyledBgImg = styled.img`
    height: 100%;
    // box-shadow: 0px 0px 300px 260px #222;
    border-radius: 100px;
`;

export default function Header() {
    return (
        <StyledHeader className="headerDiv">
            <StyledHeaderContent className="header" height={400} padding={100}>
                <StyledBgImg src={bg} alt="backgroundgjf" />
            </StyledHeaderContent>
            <Menu topPos={400} p={100} m={0} b={0} />
        </StyledHeader>
    )
}