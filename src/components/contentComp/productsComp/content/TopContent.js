import React from 'react'
import styled from 'styled-components';

import imgSrc from '../../../../image/productsImgs/article/u105.png'

const StyledTopArticle = styled.div`
`;

const StyledArticleWrap = styled.div`
    display: inline-block;
`;

const StyledTitleH1 = styled.h1`
    text-align: left;
`;

const StyleText = styled.p`
    text-align: left;
    padding: 0 0 10px 0;
`;

export default function TopContent() {
    return (
        <StyledTopArticle>
            <StyledArticleWrap>
                <StyledTitleH1>자동차 자동 검사 시스템</StyledTitleH1>
                <StyleText>인공지능 기반의 컴퓨터 비전 기술을 이용한 자동차 자동 검사 시스템</StyleText>
                <img src={imgSrc} alt="img" />
            </StyledArticleWrap>
        </StyledTopArticle>
    )
}
