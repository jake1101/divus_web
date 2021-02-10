import React from 'react';
import article1 from '../image/article/article1.png'

function Section() {
    return(
    <section>
        <article id="article1">
            <img src={article1} width="100%"/>
        </article>
        <article id="article2">
            <img/>
            <img/>
            <img/>
        </article>
    </section>
    )
}

export default Section;