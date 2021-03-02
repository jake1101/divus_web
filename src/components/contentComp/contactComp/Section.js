import React from 'react';
import styled from 'styled-components';

import $ from 'jquery';

const StyledArticleWrap = styled.article`
    padding: 30px 20% 120px 20%;
    text-align: center;
`;

const StyledForm = styled.form`

`;

const StyledInputWrap = styled.div`
    text-align: left;
    padding: 0 0 30px 0;
    height: 100px;
    line-height: 10px;
`;

const StyledLabel = styled.label`
    font-size: 30px;
`;

const StyledInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background: none;
    color: white;
    font-size: 60px;
    padding: 10px 0;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    border: none;
    outline: none;
    background: none;
    color: white;
    font-size: 60px;
    padding: 10px 0;
    height: 150px;
    display: block;
    position: relative;
    resize: none;
`;

const StyledSubmitBtnDiv = styled.div`
    text-align: right;
    margin: 30px 0;
`;

const StyledSubmitBtn = styled.input`
    border: 1px solid #fff;
    border-radius: 5px;
    background: none;
    color: white;
    font-size: 30px;
    &:hover {
        cursor: pointer;
        border: 3px solid #dcdbe1;
    }
`;

export default function Section() {
    const handleChange = (e) => {
        $(e.target).css({
            fontSize: "30px"
        })

        if (!e.target.value) {
            $(e.target).css({
                fontSize: "60px",
            })
        }
    }
    return (
        <StyledArticleWrap className="contact">
            <StyledForm>
                <StyledInputWrap>
                    <StyledLabel>NAME</StyledLabel>
                    <StyledInput calssName="input" onChange={handleChange} spellCheck="false" placeholder="이름" />
                </StyledInputWrap>
                <StyledInputWrap>
                    <StyledLabel>E-MAIL</StyledLabel>
                    <StyledInput className="input" onChange={handleChange} spellCheck="false" placeholder="이메일" />
                </StyledInputWrap>
                <StyledInputWrap>
                    <StyledLabel>PHONE</StyledLabel>
                    <StyledInput className="input" onChange={handleChange} spellCheck="false" placeholder="전화" />
                </StyledInputWrap>
                <StyledInputWrap>
                    <StyledLabel>TITLE</StyledLabel>
                    <StyledInput className="input" onChange={handleChange} spellCheck="false" placeholder="제목" />
                </StyledInputWrap>
                <StyledInputWrap>
                    <StyledLabel>DETAILS</StyledLabel>
                    <StyledTextarea className="input" onChange={handleChange} spellCheck="false" placeholder="문의 내용" />
                </StyledInputWrap>
                <StyledSubmitBtnDiv>
                    <StyledSubmitBtn type="submit" value="전송" />
                </StyledSubmitBtnDiv>
            </StyledForm>
        </StyledArticleWrap>
    )
}
