import React from "react";
import styled from 'styled-components';

const StyledDemoLoginDiv = styled.div`
  margin: 0 auto;
  width: 550px;
  color: white;
  border: 1px solid black;
  padding: 10px 0 90px 0;
`;

const StyledH1 = styled.h1`
  font-size: 50px;
  padding: 10px 0 60px 0;
`;

const StyledAllInputDivWrap = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

const StyledInputDivWrap = styled.div`
  text-align: left;
`;

const StyledInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  margin: 0 0 0 10px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const StyledInputButtonDiv = styled.div`
  padding: 0 0 0 5px;
`;

const StyledInputButton = styled.input`
  height: 100%;
  border: none;
  border-radius: 5px;
`;

export default function DemoLogin() {
  return (
    <StyledDemoLoginDiv className="loginDiv articleDarkBlueGray">
      <StyledH1>DemoLogin</StyledH1>
      <form method={"POST"} action={"/login"}>
        <StyledAllInputDivWrap>
          <StyledInputDivWrap>
            <StyledInputDiv style={{ margin: "0 0 5px 0" }}>
              <label>아이디</label>
              <StyledInput type="text" name="id" />
            </StyledInputDiv>
            <StyledInputDiv>
              <label>비밀번호</label>
              <StyledInput type="password" name="password" />
            </StyledInputDiv>
          </StyledInputDivWrap>
          <StyledInputButtonDiv>
            <StyledInputButton type="submit" value="로그인" />
          </StyledInputButtonDiv>
        </StyledAllInputDivWrap>
      </form>
    </StyledDemoLoginDiv>
  )
}