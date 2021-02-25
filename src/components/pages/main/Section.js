import React from 'react';
import styled from 'styled-components';

import ArticleImg from './contents/ArticleImg';
import SlideImg from './contents/SlideImg';
import MapContent from './contents/MapContent';

const StyledMainSection = styled.section`
`;

const StyledGreeting = styled.div`
    font-size: 100px;
    text-align: center;
    font-weight: 100;
    margin: 260px 0 260px 0;
`;

const StyledArticle = styled.article`

`;

export default function Section() {
    return(
    <StyledMainSection>
        <StyledGreeting className="greetTxt"><h1>WELCOME TO DIVUS</h1></StyledGreeting>
        <StyledArticle>
            <ArticleImg />
        </StyledArticle>
        <StyledArticle>
            <SlideImg />
        </StyledArticle>
        <StyledArticle>
            <MapContent />
        </StyledArticle>
    </StyledMainSection>
    )
}