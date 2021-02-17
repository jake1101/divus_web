import React from 'react';
import styled from 'styled-components';

import ArticleImg from './contents/ArticleImg';
import SlideImg from './contents/SlideImg';
import MapContent from './contents/MapContent';

const StyledMainSection = styled.section`
    padding: 30px 0px 30px 0px;
`;

const StyledArticle = styled.article`
    padding: 0 0 30px 0;
`;

export default function Section() {
    return(
    <StyledMainSection>
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