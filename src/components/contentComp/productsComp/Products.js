import React from 'react';

import Header from '../header/Header';
import PageLinkComp from './contents/PageLinkComp'
import Footer from '../../public/Footer';
import Section from './Section';

export default function Products() {
    const props = {
        f: "OUR PRODUCTS ARE ABOUT",
        l: "TRANSFORMING YOUR BUSINESS.",
    }
    return (
        <div id="content">
            <Header {...props}/>
            <PageLinkComp />
            <Section />
            <Footer />
        </div>
    )
}
