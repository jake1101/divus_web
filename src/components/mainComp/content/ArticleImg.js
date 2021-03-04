import React from 'react';
import articleImg from '../../../image/article/article1.png';

function ArticleImg() {
    return (
        <article className="articleGray">
            <img src={articleImg} width="100%" alt="article" />
        </article>
    )
}

export default ArticleImg;