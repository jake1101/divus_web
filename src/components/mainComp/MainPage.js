import React from 'react';

import Header from './Header';
import Section from './Section';
import Footer from '../publicComp/Footer';

export default function MainPage() {
  return (
    <div className="content">
      <Header key="mainPage" />
      <Section />
      <Footer />
    </div>
  )
}