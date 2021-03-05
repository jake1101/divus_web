import React from 'react';
import styled from 'styled-components';

import Menu from '../publicComp/Menu';

const StyledHeader = styled.header`
    margin: 0 0 30px 0;
    padding: 0;
    position: relative;
`;

const StyledPubMenuBar = styled.div`
    position: relative;
    text-align: center;
    padding: 0;
    margin: 0;
`;

const StyledTopArticle = styled.article`
    position: relative;
    border-bottom: 1px solid black;
    display: table;
    width: 100%;
`;

const StyledTitleH1 = styled.h1`
    text-align: center;
    font-size: 30px;
    height: 400px;
    display: table-cell;
    vertical-align: middle;
    margin: 0 auto;
    padding: 50px 0 0 0;
`;

export default function Header(props) {
    return (
        <StyledHeader>
            <StyledPubMenuBar>
                <Menu topPos={0} showLogo={"block"} />
            </StyledPubMenuBar>
            <StyledTopArticle>
                <StyledTitleH1 className="contentTitle">{props.f}<br />{props.l}</StyledTitleH1>
            </StyledTopArticle>
        </StyledHeader>
    )
}
