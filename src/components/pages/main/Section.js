import React from 'react';
import styled from 'styled-components';

import ArticleImg from './contents/ArticleImg';
import SlideImg from './contents/SlideImg';
import MapContent from './contents/MapContent';

const StyledMainSection = styled.section`
`;

const StyledArticle = styled.article`
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