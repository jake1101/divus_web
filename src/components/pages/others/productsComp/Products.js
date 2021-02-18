import React from 'react';

import Header from '../aPubTop/Header';
import PageLinkComp from './contents/PageLinkComp'
import Footer from '../../public/Footer';

export default function Products() {
    const props = {
        f: "OUR PRODUCTS ARE ABOUT",
        l: "TRANSFORMING YOUR BUSINESS.",
    }
    return (
        <div id="content">
            <Header {...props}/>
            <PageLinkComp />
            <Footer />
        </div>
    )
}
