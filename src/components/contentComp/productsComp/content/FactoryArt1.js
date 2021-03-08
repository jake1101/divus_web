import React from 'react';
import styled from 'styled-components';

import image from '../../../../image/productsImgs/article/u58.png';

const StyledP = styled.p`
  font-size: 20px;
  padding: 30px 0;
`;

const StyledImgDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FactoryArt1 = () => {
  return (
    <article className="articleDarkBlueGray articleClass">
      <h2>제조공정의 예측, 예지, 품질 검사 솔루션</h2>
      <StyledP>
        접근성, 확장성 크로스 브라우저 플랫폼 웹기반 서비스.<br />
          발주, 입고, 적재, 생산, 검수, 출고 등 전 과정 데이터 통합 정규화.<br />
          생산 제품의 인장강도 예측 및 데이터 시각화.<br />
          AI 학습을 통한 인장강도 예측 서비스.<br />
      </StyledP>
      <StyledImgDiv>
        <img src={image} width={"832px"} />
      </StyledImgDiv>
    </article>
  )
}

export default FactoryArt1
