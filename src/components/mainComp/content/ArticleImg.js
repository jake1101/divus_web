import React from 'react';
import articleImg from '../../../image/article/article1.png';

function ArticleImg() {
    return (
        <article className="articleDarkBlueGray articleClass mainFirstArticle">
            <img src={articleImg} width="100%" alt="article" />
        </article>
    )
}

export default ArticleImg;