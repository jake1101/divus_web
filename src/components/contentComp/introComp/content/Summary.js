import React from 'react'
import styled from 'styled-components';

const StyledArticle2 = styled.article`
  padding: 30px 20% 120px 20%;
`;

const StyledSummaryTitle = styled.h2`
  font-size: 40px;
  padding: 30px 0 20px 0;
`;

const StyledSummarySub = styled.h2`
  padding: 0 0 60px 0;
`;

const StyledSummaryTable = styled.table`
  margin: 0 auto;
  font-size: 20px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 0 0 20px 0;
`;

const StyledSummaryTr = styled.tr`
  text-align: left;
`;

const StyledSummaryTh = styled.th`
  width: 150px;
  padding: 20px;
`;

export default function Summary() {
  return (
    <StyledArticle2>
      <StyledSummaryTitle>개요</StyledSummaryTitle>
      <StyledSummarySub>컴퓨터 비전, OCR, 예측기술 분야의 AI 전문 기업으로 DoctorCar, Doctor Factory 솔루션 개발</StyledSummarySub>
      <StyledSummaryTable>
        <thead></thead>
        <tbody>
          <StyledSummaryTr>
            <StyledSummaryTh>회사명</StyledSummaryTh>
            <td>디우스 주식회사</td>
            <StyledSummaryTh>대표자</StyledSummaryTh>
            <td>안상현</td>
          </StyledSummaryTr>
          <StyledSummaryTr>
            <StyledSummaryTh>주요사업</StyledSummaryTh>
            <td>AI Solution,<br />Smart Factory Block Chain & Web/App</td>
            <StyledSummaryTh>인허가 등록</StyledSummaryTh>
            <td>기업부설연구수 연구개발업</td>
          </StyledSummaryTr>
          <StyledSummaryTr>
            <StyledSummaryTh>설립일</StyledSummaryTh>
            <td>2019년 1월 28일</td>
            <StyledSummaryTh>벤처기업인증</StyledSummaryTh>
            <td>2019년 4월 11일</td>
          </StyledSummaryTr>
          <StyledSummaryTr>
            <StyledSummaryTh>주소</StyledSummaryTh>
            <td>경기도 하남시 검단산로 239<br />하남시 벤처센터 405호</td>
          </StyledSummaryTr>
        </tbody>
      </StyledSummaryTable>
    </StyledArticle2>
  )
}
