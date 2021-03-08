import React from 'react'
import styled from 'styled-components';

import imgSrc from '../../../../image/productsImgs/article/u105.png'

const StyledTxtDiv = styled.div`
    color: white;
`;

const StyledTitleH1 = styled.h2`
    padding: 10px 0 0 0;
`;

const StyleText = styled.p`
    padding: 0 0 30px 0;
    font-size: 20px;
`;

const StyledImgDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export default function TopContent() {
    return (
        <article className="articleDarkBlueGray">
            <StyledTxtDiv>
                <StyledTitleH1>자동차 자동 검사 시스템</StyledTitleH1>
                <StyleText>인공지능 기반의 컴퓨터 비전 기술을 이용한 자동차 자동 검사 시스템</StyleText>
            </StyledTxtDiv>

            <StyledImgDiv>
                <img src={imgSrc} alt="img" width="893px" />
            </StyledImgDiv>
        </article>
    )
}
