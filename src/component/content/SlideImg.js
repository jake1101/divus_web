import slide1 from '../../image/article/article_slide1.png'
import slide2 from '../../image/article/article_slide2.png'
import slide3 from '../../image/article/article_slide3.png'
import slide4 from '../../image/article/article_slide4.png'

import React from 'react';

function SlideImg() {
    return(
        <div className="slider">
            <div className="slDiv">
                <img className="slImg" src={slide1} width="100%" alt="article"/>
                {/* <span className="slTxt">운수(택시) doctor car 시범 사업</span> */}
            </div>
            <div className="slDiv">
                <img className="slImg" src={slide2} width="100%" alt="article"/>
                {/* <span className="slTxt">렌터카(공유 자동차) doctor car solution</span> */}
            </div>
            <div className="slDiv">
                <img className="slImg" src={slide3} width="100%" alt="article"/>
                {/* <span className="slTxt">자동차 수리 업체용 doctor car solution</span> */}
            </div>
            <div className="slDiv">
                <img className="slImg" src={slide4} width="100%" alt="article"/>
                {/* <span className="slTxt">주차관제업체용 doctor car solution</span> */}
            </div>
        </div>
    )
}

export default SlideImg;