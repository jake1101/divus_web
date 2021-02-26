import React from 'react';
import styled from 'styled-components';

import slide1 from '../../../image/article/article_slide1.png'
import slide2 from '../../../image/article/article_slide2.png'
import slide3 from '../../../image/article/article_slide3.png'
import slide4 from '../../../image/article/article_slide4.png'

import Slider from "react-slick";

const StyledSlideWrap = styled.div`
    background-color: #46413b;
    padding: 60px 20% 30px 20%;
`;

const slideDivStyle = {
  display: "flex",
  justifyContent: "center"
};

function SlideImg() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true
  };
  return (
    <StyledSlideWrap className="article2">
      <Slider {...settings}>
        <div style={slideDivStyle}>
          <img className="slImg" src={slide1} alt="article" />
        </div>
        <div style={slideDivStyle}>
          <img className="slImg" src={slide2} alt="article" />
        </div>
        <div style={slideDivStyle}>
          <img className="slImg" src={slide3} alt="article" />
        </div>
        <div style={slideDivStyle}>
          <img className="slImg" src={slide4} alt="article" />
        </div>
      </Slider>
    </StyledSlideWrap>
  )
}

export default SlideImg;