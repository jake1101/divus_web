import React from 'react';
import styled from 'styled-components';

import slide1 from '../../../../image/article/article_slide1.png'
import slide2 from '../../../../image/article/article_slide2.png'
import slide3 from '../../../../image/article/article_slide3.png'
import slide4 from '../../../../image/article/article_slide4.png'

const StyledSlideDiv = styled.div`
    display: flex;
    justify-content: center;
`;

function SlideImg() {
    return(
        <div className="slider">
            <StyledSlideDiv>
                <img className="slImg" src={slide1} alt="article"/>
            </StyledSlideDiv>
            <StyledSlideDiv>
                <img className="slImg" src={slide2} alt="article"/>
            </StyledSlideDiv>
            <StyledSlideDiv>
                <img className="slImg" src={slide3} alt="article"/>
            </StyledSlideDiv>
            <StyledSlideDiv>
                <img className="slImg" src={slide4} alt="article"/>
            </StyledSlideDiv>
        </div>
    )
}

export default SlideImg;