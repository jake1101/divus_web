import React from 'react';

import Header from '../Header';
import PageLinkComp from './content/PageLinkComp'
import Section from './Section';
import Footer from '../../publicComp/Footer';

export default function Products() {
    const props = {
        f: "OUR PRODUCTS ARE ABOUT",
        l: "TRANSFORMING YOUR BUSINESS.",
    }
    return (
        <div class="content">
            <Header {...props} />
            <PageLinkComp />
            <Section />
            <Footer />
        </div>
    )
}
