import React from 'react';

import Header from './Header';
import Section from './Section';
import Footer from '../public/Footer';

export default function MainPage() {
    return (
        <div id="content">
            <Header imgUrl={"../../../image/sample_bg.jpg"} />
            <Section />
            <Footer />
        </div>
    )
}