import React from 'react';
import styled from 'styled-components';

import ArticleImg from './content/ArticleImg';
import SlideImg from './content/SlideImg';
import MapContent from './content/kakaoMap';

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
    return (
        <StyledMainSection>
            <StyledGreeting className="greetTxt"><h1>WELCOME TO DIVUS</h1></StyledGreeting>
            <StyledArticle id="arti1">
                <ArticleImg />
            </StyledArticle>
            <StyledArticle id="arti2">
                <SlideImg />
            </StyledArticle>
            <StyledArticle id="arti3">
                <MapContent />
            </StyledArticle>
        </StyledMainSection>
    )
}