import ArticleImg from './content/ArticleImg';
import SlideImg from './content/SlideImg';
import MapContent from './content/MapContent';

import React from 'react';

function Section() {
    return(
    <section>
        <article id="article1">
            <ArticleImg />
        </article>
        <article id="articleSlide">
            <SlideImg />
        </article>
        <article id="articleMap">
            <MapContent />
        </article>
    </section>
    )
}

export default Section;