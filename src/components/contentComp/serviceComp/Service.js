import React from 'react';

import Header from '../Header';
import Section from './Section';
import Footer from '../../publicComp/Footer';



export default function Service() {
  return (
    <div className="content">
      <Header f={"AUTHENTICATED USERS"} l={"CAN DEMONSTRATE THE PRODUCT."} />
      <Section />
      <Footer />
    </div>
  )
}