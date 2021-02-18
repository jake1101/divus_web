import React from 'react';
import Article1 from './article/Article1';
import styled from 'styled-components';

import factory from '../../../../image/technologyImgs/article/factory.png';
import car1 from '../../../../image/technologyImgs/article/car1.png';
import car2 from '../../../../image/technologyImgs/article/car2.png';
import car3 from '../../../../image/technologyImgs/article/car3.png';
import car4 from '../../../../image/technologyImgs/article/car4.png';

export default function Section() {
    return (
        <div>
            <Article1 />
            <div>
                <span>자동차 자동검사솔루션 “Doctor Car”</span>
                <div>
                    <span>운수(택시) Doctor Car 시범 사업</span>
                    <div><img src={car1.png} alt="car1" /></div>
                </div>
                <div>
                    <span>랜터카(공유자동차)</span>
                    <div><img src={car2.png} alt="car2" /></div>
                </div>
                <div>
                    <span>자동차 수리 업체용</span>
                    <div><img src={car3.png} alt="car3" /></div>
                </div>
                <div>
                    <span>주차관제업체용</span>
                    <div><img src={car4.png} alt="car4" /></div>
                </div>
            </div>
            <div>
                <span>제조공정의 예측, 예지, 품질검사솔루션 “Doctor Factory”</span>
                <div><img src={factory} alt="doctor_factory" /></div>
            </div>
        </div>
    )
}
