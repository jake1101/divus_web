import React from 'react'
import styled from 'styled-components';

import car1 from '../../../../image/technologyImgs/article/car1.png';
import car2 from '../../../../image/technologyImgs/article/car2.png';
import car3 from '../../../../image/technologyImgs/article/car3.png';
import car4 from '../../../../image/technologyImgs/article/car4.png';

const StyledArticleContent = styled.div`
    border: 1px solid white;
    padding: 30px;
`;


const StyledTitle = styled.h2`
    padding: 0 0 30px 0;
`;

const StyledContentTitle = styled.h3`

`;

const StyledContent = styled.div`
`;

const StyledContentDiv = styled.div`
    width: 100%;
    margin: 10px 0 30px 0;
`;

const StyledContentImg = styled.img`
    width: 70%;
`;


export default function Article2() {
    return (
        <article className="articleBrown articleClass">
            <StyledTitle>자동차 자동검사솔루션 “Doctor Car”</StyledTitle>
            <StyledArticleContent>
                <StyledContent>
                    <StyledContentTitle>운수(택시) Doctor Car 시범 사업</StyledContentTitle>
                    <StyledContentDiv>
                        <StyledContentImg src={car1} alt="car1" />
                    </StyledContentDiv>
                </StyledContent>
                <StyledContent>
                    <StyledContentTitle>랜터카(공유자동차)</StyledContentTitle>
                    <StyledContentDiv>
                        <StyledContentImg src={car2} alt="car2" />
                    </StyledContentDiv>
                </StyledContent>
                <StyledContent>
                    <StyledContentTitle>자동차 수리 업체용</StyledContentTitle>
                    <StyledContentDiv>
                        <StyledContentImg src={car3} alt="car3" />
                    </StyledContentDiv>
                </StyledContent>
                <StyledContent>
                    <StyledContentTitle>주차관제업체용</StyledContentTitle>
                    <StyledContentDiv>
                        <StyledContentImg src={car4} alt="car4" />
                    </StyledContentDiv>
                </StyledContent>
            </StyledArticleContent>
        </article>
    )
}
