import React from 'react';

import Header from '../Header';
import PageLinkComp from './content/PageLinkComp'
import Footer from '../../publicComp/Footer';
import Section from './Section';

export default function Products() {
    const props = {
        f: "OUR PRODUCTS ARE ABOUT",
        l: "TRANSFORMING YOUR BUSINESS.",
    }
    return (
        <div id="content">
            <Header {...props} />
            <PageLinkComp />
            <Section />
            <Footer />
        </div>
    )
}
