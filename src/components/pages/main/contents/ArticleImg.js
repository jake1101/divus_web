import React from 'react';
import styled from 'styled-components';

import articleImg from '../../../../image/article/article1.png';

const StyledArticleWrap = styled.div`
    background-color: #fff;
    padding: 60px 100px 60px 100px;
`;

function ArticleImg() {
    return(
        <StyledArticleWrap>
            <img src={articleImg} width="100%" alt="article"/>
        </StyledArticleWrap>
    )
}

export default ArticleImg;