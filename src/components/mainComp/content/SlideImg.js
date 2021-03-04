import React from 'react';
import styled from 'styled-components';

import slide1 from '../../../image/article/article_slide1.png'
import slide2 from '../../../image/article/article_slide2.png'
import slide3 from '../../../image/article/article_slide3.png'
import slide4 from '../../../image/article/article_slide4.png'

import Slider from "react-slick";

const slideImgStyle = {
  width: "100%"
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
    <article className="articleGray">
      <Slider {...settings}>
        <div>
          <img style={slideImgStyle} className="slImg" src={slide1} alt="article" />
        </div>
        <div>
          <img style={slideImgStyle} className="slImg" src={slide2} alt="article" />
        </div>
        <div>
          <img style={slideImgStyle} className="slImg" src={slide3} alt="article" />
        </div>
        <div>
          <img style={slideImgStyle} className="slImg" src={slide4} alt="article" />
        </div>
      </Slider>
    </article>
  )
}

export default SlideImg;