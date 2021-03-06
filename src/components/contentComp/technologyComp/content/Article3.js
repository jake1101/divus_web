import React from 'react'
import styled from 'styled-components';

import factory from '../../../../image/technologyImgs/article/factory.png';

const StyledArticleContent = styled.div`
    border: 1px solid white;
    padding: 30px;
`;

const StyledTitle = styled.h2`
    padding: 0 0 30px 0;
`;

const StyledContentDiv = styled.div`
    width: 100%;
    margin: 10px 0 ;
`;

const StyledContentImg = styled.img`
    width: 100%;
`;


export default function Article3() {
    return (
        <article className="articleGray articleClass">
            <StyledTitle>제조공정의 예측, 예지, 품질검사솔루션 “Doctor Factory”</StyledTitle>
            <StyledArticleContent className="techContent3">
                <StyledContentDiv><StyledContentImg src={factory} alt="doctor_factory" /></StyledContentDiv>
            </StyledArticleContent>
        </article>
    )
}
