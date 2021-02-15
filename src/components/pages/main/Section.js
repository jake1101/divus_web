import React from 'react';
import styled from 'styled-components';

import ArticleImg from './contents/ArticleImg';
import SlideImg from './contents/SlideImg';
import MapContent from './contents/MapContent';

const StyledMainSection = styled.section`
    padding: 30px 400px 30px 400px;
`;

const StyledSectionIntro = styled.article`
    padding: 0 0 30px 0;
`;

const StyledSectionSlide = styled.article`
    padding: 0 0 30px 0;
`;

export default function Section() {
    return(
    <StyledMainSection>
        <StyledSectionIntro>
            <ArticleImg />
        </StyledSectionIntro>
        <StyledSectionSlide>
            <SlideImg />
        </StyledSectionSlide>
            <article id="articleMap">
                <MapContent />
            </article>
    </StyledMainSection>
    )
}