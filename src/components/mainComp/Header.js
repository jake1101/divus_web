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
    display: flex;
    justify-content: center;
`;

const StyledImgDiv = styled.div`
    height: ${props => props.height}px;
    padding: ${props => props.padding}px;
    width: 900px;
`;

const StyledBgImg = styled.img`
    height: 100%;
    box-shadow: 0px 0px 100px 100px #222;
    border-radius: 100px;
`;

export default function Header() {
    return (
        <StyledHeader className="header">
            <StyledHeaderContent className="headerDiv" height={400} padding={100}>
                <StyledImgDiv>
                    <StyledBgImg src={bg} alt="backgroundgjf" width="100%" />
                </StyledImgDiv>
            </StyledHeaderContent>
            <Menu topPos={400} p={100} m={0} b={0} />
        </StyledHeader>
    )
}