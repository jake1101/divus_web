import React from 'react';
import styled from 'styled-components';

import ArticleImg from './content/ArticleImg';
import SlideImg from './content/SlideImg';
import MapContent from './content/kakaoMap';

export default function Section() {
  return (
    <section className="mainSection">

      <ArticleImg />

      <SlideImg />

      <MapContent />

    </section>
  )
}