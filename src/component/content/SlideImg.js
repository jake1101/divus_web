import slide1 from '../../image/article/article_slide1.png'
import slide2 from '../../image/article/article_slide2.png'
import slide3 from '../../image/article/article_slide3.png'
import slide4 from '../../image/article/article_slide4.png'

import React, { useEffect } from 'react';

function SlideImg() {
    return(
        <div>
            <img src={slide1} width="100%" alt="article"/>
            <img src={slide2} width="100%" alt="article"/>
            <img src={slide3} width="100%" alt="article"/>
            <img src={slide4} width="100%" alt="article"/>
        </div>
    )
}

export default SlideImg;