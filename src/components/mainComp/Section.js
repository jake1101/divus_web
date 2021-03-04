import React from 'react';
import styled from 'styled-components';

import ArticleImg from './content/ArticleImg';
import SlideImg from './content/SlideImg';
import MapContent from './content/kakaoMap';

const StyledGreeting = styled.div`
    font-size: 100px;
    text-align: center;
    font-weight: 100;
    margin: 260px 0 260px 0;
`;

export default function Section() {
    return (
        <section className="contSection">
            <StyledGreeting className="greetTxt"><h1>WELCOME TO DIVUS</h1></StyledGreeting>

            <ArticleImg />

            <SlideImg />

            <MapContent />

        </section>
    )
}