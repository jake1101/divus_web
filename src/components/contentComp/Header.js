import React from 'react';
import styled from 'styled-components';

import Menu from '../publicComp/Menu';

const StyledPubHeader = styled.div`
    position: relative;
    text-align: center;
    padding: 0;
    margin: 0;
`;

const StyledTopArticle = styled.article`
    position: relative;
    height: 600px;
`;

const StyledTitleH1 = styled.h1`
    text-align: center;
    font-size: 30px;
    padding: 300px 0 0 0;
`;

export default function Header(props) {
    return (
        <header className="headerDiv">
            <StyledPubHeader className={"header"}>
                <Menu topPos={0} showLogo={"block"} />
            </StyledPubHeader>
            <StyledTopArticle>
                <StyledTitleH1 className="contentTitle">{props.f}<br />{props.l}</StyledTitleH1>
            </StyledTopArticle>
        </header>
    )
}
