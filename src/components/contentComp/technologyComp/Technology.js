import React from 'react';

import Header from '../Header'
import Footer from '../../publicComp/Footer';
import Section from './Section';

export default function Technology() {
    return (
        <div className="content">
            <Header f={"IT IS OUR TECHNOLOGY"} l={"FOR THE FUTURE."} />
            <Section />
            <Footer />
        </div>
    )
}