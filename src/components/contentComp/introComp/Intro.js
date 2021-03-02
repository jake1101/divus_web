import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Section from './Section';
import Footer from '../../publicComp/Footer'

export default function Intro() {
  var txt1 = `PURSUING A BUSINESSTHAT\nINCREASES DATA VALUE.`;
  var txt2 = `PROMISE OF ACCURATE RESULTS\nTHROUGH DATA ANALYSIS.`;
  var i = 0;

  const newLine = (txt) => txt.split("\n").map(
    (line) => {
      i++;
      return <div key={i}>{line}</div>;
    }
  );


  return (
    <div className="content">
      <Header f={newLine(txt1)} l={newLine(txt2)} />
      <Section />
      <Footer />
    </div>
  )
}
