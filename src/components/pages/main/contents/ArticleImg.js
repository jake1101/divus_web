import React from 'react';
import styled from 'styled-components';

import articleImg from '../../../../image/article/article1.png';

const StyledArticleWrap = styled.div`
    padding: 160px 20% 60px 20%;
    background: #111;

`;

function ArticleImg() {
    return(
        <StyledArticleWrap className="article1">
            <img src={articleImg} width="100%" alt="article"/>
        </StyledArticleWrap>
    )
}

export default ArticleImg;