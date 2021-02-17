import React from 'react';
import styled from 'styled-components';

import Menu from '../../public/Menu';
import TopArticle from './TopArticle';

const StyledPubHeader = styled.div`
    height: 137px;
    text-align: center;
    background: #888;
    padding: 0;
    margin: 0;
`;

export default function Header(props) {
    return (
        <header>
            <StyledPubHeader id={"headerDiv"}>
                <Menu opa={1}/>
            </StyledPubHeader>
            <TopArticle {...props}/>
        </header>
    )
}
