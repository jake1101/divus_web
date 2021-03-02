import React from 'react';
import Article1 from './content/Article1';
import Article2 from './content/Article2';
import Article3 from './content/Article3';
import styled from 'styled-components';

const StyledSection = styled.section`
    text-align: center;
`;

export default function Section() {
    return (
        <StyledSection>
            <Article1 />
            <Article2 />
            <Article3 />
        </StyledSection>
    )
}
