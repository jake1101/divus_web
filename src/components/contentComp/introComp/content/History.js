import React from 'react'
import styled from 'styled-components';

import graphImg from '../../../../image/introImg/graphImg.png';
import carImg from '../../../../image/introImg/carImg.png';

const StyledArticle1 = styled.article`
padding: 60px 20% 0 20%;
`;

const StyledHistoryTitle = styled.h2`
  font-size: 40px;
`;

const StyledHistoryDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0 40px 0;
`;

const StyledUlDiv = styled.div`
  text-align: right;
  width: 600px;
`;

const StyledYear = styled.div`
  font-size: 40px;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0 0 0;
  border-bottom: 1px solid white;
`;

export default function History() {
  return (
    <StyledArticle1>
      <StyledHistoryTitle>회사 연혁</StyledHistoryTitle>
      <StyledHistoryDiv>
        <img className="introClass" src={graphImg} width={350} />
        <StyledUlDiv>
          <StyledYear>2020</StyledYear>
          <ul>
            <StyledLi>
              <h4>12월</h4><p>대중소상생형(삼성전자) 스마트공자 구축</p>
            </StyledLi>
            <StyledLi>
              <h4>09월</h4><p>스마트팩토리 공급기업</p>
            </StyledLi>
            <StyledLi>
              <h4>08월</h4><p>정보통신산업진흥원(NIPA) 주관 AI 바우쳐 지원사업(제일제강) 선정</p>
            </StyledLi>
            <StyledLi>
              <h4>06월</h4><p>정보통신산업진흥원(NIPA) 주관 AI 바우처 지원사업(피플카) 선정<br />중소벤처기업부 주관 초기 창업 패키지 사업 선정</p>
            </StyledLi>
            <StyledLi>
              <h4>03월</h4><p>IPS스타트업밸류업2호 개인투자조합 보통주 투자유치</p>
            </StyledLi>
            <StyledLi>
              <h4>02월</h4><p>한국연구개발서비스협회 연구개발업 등록 중소기업 성과공유협약 체결</p>
            </StyledLi>
          </ul>
        </StyledUlDiv>
      </StyledHistoryDiv>
      <StyledHistoryDiv>
        <StyledUlDiv>
          <StyledYear style={{ textAlign: "left" }}>2019</StyledYear>
          <ul>
            <StyledLi>
              <h4>12월</h4>
              <p>
                한국산업단지공단 생산기술사업화지원사업,<br />
                    (주)체카(주관) : “중고차상품화공정관리플랫폼 기술 개발."<br />
                    디우스(주) : “인공지능 기반 자동차 스크래치 검사 분야 R&D.”
                  </p>
            </StyledLi>
            <StyledLi>
              <h4>08월</h4><p>기업부설연구소 인정</p>
            </StyledLi>
            <StyledLi>
              <h4>04월</h4><p>벤처기업 인증</p>
            </StyledLi>
            <StyledLi>
              <h4>03월</h4><p>세종 제10호 개인투자조합 상환전환우선주 투자유치</p>
            </StyledLi>
            <StyledLi>
              <h4>02월</h4><p>UAE, AI Solution for Damage Detection on Vehicles 계약</p>
            </StyledLi>
            <StyledLi>
              <h4>01월</h4><p>디우스(주) 설립</p>
            </StyledLi>
          </ul>
        </StyledUlDiv>
        <img className="introClass" src={carImg} width={400} />
      </StyledHistoryDiv>
    </StyledArticle1>
  )
}
