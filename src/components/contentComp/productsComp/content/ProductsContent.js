import React from 'react'
import styled from 'styled-components';

const StyledTitleH1 = styled.h2`
    padding: 0 0 30px 0;
`;

const StyledTextDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const StyledText = styled.p`
    width: 80%;
    font-size: 18px;
`;

export default function ProductsContent(props) {
    return (
        <article className={props.className} id={props.id}>
            <StyledTitleH1>{props.title}</StyledTitleH1>
            <div>{props.utub}</div>
            <StyledTextDiv>
                <StyledText>{props.text}</StyledText>
            </StyledTextDiv>
        </article>
    )
}
