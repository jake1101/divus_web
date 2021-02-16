import React from 'react';
import styled from 'styled-components';

import ArticleImg from './contents/ArticleImg';
import SlideImg from './contents/SlideImg';
import MapContent from './contents/MapContent';

const StyledMainSection = styled.section`
    padding: 30px 400px 30px 400px;
`;

const StyledSection = styled.article`
    padding: 0 0 30px 0;
`;

export default function Section() {
    return(
    <StyledMainSection>
        <StyledSection>
            <ArticleImg />
        </StyledSection>
        <StyledSection>
            <SlideImg />
        </StyledSection>
        <StyledSection>
            <MapContent />
        </StyledSection>
    </StyledMainSection>
    )
}