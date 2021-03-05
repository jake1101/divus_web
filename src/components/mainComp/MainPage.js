import React, { useState, useEffect } from 'react';

import Header from './Header';
import Section from './Section';
import Footer from '../publicComp/Footer';

export default function MainPage() {
  useEffect(() => {
    let onScrollMap = localStorage.getItem("onScrollMap");
    if (onScrollMap) {
      const mapPos = document.getElementById("mapArticle").offsetTop;
      window.scrollTo({ top: mapPos + 900, left: 0, behavior: 'smooth' })
      localStorage.clear();
    }
    localStorage.clear();
    return () => {
      localStorage.clear();
    }
  }, [])
  return (
    <div className="content">
      <Header />
      <Section />
      <Footer />
    </div>
  )
}