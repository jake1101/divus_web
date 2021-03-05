import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const StyledInputWrap = styled.div`
    text-align: left;
    padding: 0 0 30px 0;
    height: 100px;
    line-height: 10px;
`;

const StyledLabel = styled.label`
    font-size: 30px;
    width: 100%;
    height: 20px;
    display: inline-block;
    border-bottom: 1px solid white;
`;

const StyledInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
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
    height: 140px;
    display: inline-block;
    position: relative;
    resize: none;
`;

const StyledSubmitBtnDiv = styled.div`
    text-align: right;
    margin: 60px 0;
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
        e.target.style.fontSize = !e.target.value ? "60px" : "30px";
    }

    const clickSubmit = (e) => {
        if (!window.confirm("메일을 보내시겠습니까?")) e.preventDefault();
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('jake_gmail', 'template_cx5asvf', e.target, 'user_FeX9ITkS9ATkC3veGYEEq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        const ci = document.getElementsByClassName("contactInput");
        for (var i = 0; i < ci.length; i++) {
            ci[i].value = "";
            ci[i].style.fontSize = "60px";
        }
    }
    return (
        <section className="contSection">
            <article className="articleGray">
                <form onSubmit={sendEmail}>
                    <StyledInputWrap>
                        <StyledLabel>NAME</StyledLabel>
                        <StyledInput className="contactInput" name="name" onChange={handleChange} spellCheck="false" placeholder="이름" />
                    </StyledInputWrap>
                    <StyledInputWrap>
                        <StyledLabel>E-MAIL</StyledLabel>
                        <StyledInput className="contactInput" name="email" onChange={handleChange} spellCheck="false" placeholder="이메일" />
                    </StyledInputWrap>
                    <StyledInputWrap>
                        <StyledLabel>PHONE</StyledLabel>
                        <StyledInput className="contactInput" name="phone" onChange={handleChange} spellCheck="false" placeholder="전화" />
                    </StyledInputWrap>
                    <StyledInputWrap>
                        <StyledLabel>TITLE</StyledLabel>
                        <StyledInput className="contactInput" name="title" onChange={handleChange} spellCheck="false" placeholder="제목" />
                    </StyledInputWrap>
                    <StyledInputWrap>
                        <StyledLabel>DETAILS</StyledLabel>
                        <StyledTextarea className="contactInput" name="msg" onChange={handleChange} spellCheck="false" placeholder="문의 내용" />
                    </StyledInputWrap>
                    <input className="contactInput" name="cc" style={{ display: "none" }} onChange={handleChange} value="hptop.divus@gmail.com" />
                    <StyledSubmitBtnDiv>
                        <StyledSubmitBtn name="submit" type="submit" value="전송" onClick={clickSubmit} />
                    </StyledSubmitBtnDiv>
                </form>
            </article>
        </section>
    )
}
