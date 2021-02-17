import React, { useEffect } from 'react'
import styled from 'styled-components';

import TopArticle from './contents/TopArticle';

const StyledSection = styled.section`
    padding: 30px 400px 30px 400px;
`;

export default function Section() {
    return (
        <StyledSection>
            <TopArticle />
        </StyledSection>
    )
}
