import React from 'react';
import styled from 'styled-components';

import articleImg from '../../../../image/article/article1.png';

const StyledArticleWrap = styled.div`
    margin: 160px 20% 60px 20%;
`;

function ArticleImg() {
    return(
        <StyledArticleWrap>
            <img src={articleImg} width="100%" alt="article"/>
        </StyledArticleWrap>
    )
}

export default ArticleImg;