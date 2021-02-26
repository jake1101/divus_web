import React from 'react'
import styled from 'styled-components';

const StyledProductsContent = styled.div`
    padding: 30px 0 30px 0;
`;

const StyledContentWrap = styled.div`
`;

const StyledTitleH1 = styled.h1`
    padding: 30px 0 10px 0;
`;

const StyledTextDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0 30px 0;
`;

const StyledText = styled.p`
    width: 50%;
`;

export default function ProductsContent(props) {
    return (
        <StyledProductsContent className={props.className} id={props.id}>
            <StyledContentWrap>
                <StyledTitleH1>{props.title}</StyledTitleH1>
                <div>{props.utub}</div>
                <StyledTextDiv>
                    <StyledText>{props.text}</StyledText>
                </StyledTextDiv>
            </StyledContentWrap>
        </StyledProductsContent>
    )
}
