import React from 'react';
import styled from 'styled-components';

import Menu from '../publicComp/Menu';

const StyledPubHeader = styled.div`
    height: 137px;
    text-align: center;
    padding: 0;
    margin: 0;
`;

const StyledTopArticle = styled.article`
    height: 500px;
`;

const StyledTitleH1 = styled.h1`
    text-align: center;
    font-size: 30px;
    padding: 200px 0 200px 0;
`;

export default function Header(props) {
    return (
        <header className="othHeader">
            <StyledPubHeader id={"headerDiv"}>
                <Menu opa={1} />
            </StyledPubHeader>
            <StyledTopArticle>
                <StyledTitleH1>{props.f}<br />{props.l}</StyledTitleH1>
            </StyledTopArticle>
        </header>
    )
}
