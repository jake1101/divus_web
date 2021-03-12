import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './components/mainComp/MainPage';
import Products from './components/contentComp/productsComp/Products';
import Technology from './components/contentComp/technologyComp/Technology';
import Contact from './components/contentComp/contactComp/Contact';
import Service from './components/contentComp/serviceComp/Service';
import Intro from './components/contentComp/introComp/Intro';

const SetScrollTop = function () {
  const [show, setShow] = useState("none");
  const [pos] = useState({ top: 0, left: 0, behavior: 'smooth' });

  const scrollTop = () => {
    window.scrollTo(pos)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const offsetHeight = window.document.body.offsetHeight;
      var st = window.scrollY;

      setShow((showState) => st > (offsetHeight * 0.2) ? showState = "block" : showState = "none");
    })
  }, [show, pos])

  const btnStyle = {
    display: show,
    fontSize: "40px",
    width: "60px",
    backgroundColor: "rgba(0, 0, 0, 0)",
    border: "1px solid",
    borderRadius: "6px",
    position: "fixed",
    bottom: "40px",
    left: "90%",
    color: "rgba(107, 144, 179, 0.7)",
    outline: 0,
    zIndex: 400
  }

  return (
    <button id="sclTopBtn" style={btnStyle} onClick={scrollTop}><i className="fas fa-angle-double-up"></i></button>
  )
};

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <MainPage />}></Route>
          <Route path="/products" render={() => <Products />}></Route>
          <Route path="/technology" render={() => <Technology />}></Route>
          <Route path="/contact" render={() => <Contact />}></Route>
          <Route path="/service" render={() => <Service />}></Route>
          <Route path="/intro" render={() => <Intro />}></Route>
          <Route path="/">Not found</Route>
        </Switch>
      </BrowserRouter>
      <SetScrollTop />
    </div>
  );
}
