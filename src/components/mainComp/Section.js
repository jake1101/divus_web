import React from 'react';
import styled from 'styled-components';

import ArticleImg from './content/ArticleImg';
import SlideImg from './content/SlideImg';
import MapContent from './content/kakaoMap';

export default function Section() {
    return (
        <section className="contSection" style={{ margin: "105px 0 0 0" }}>

            <ArticleImg />

            <SlideImg />

            <MapContent />

        </section>
    )
}