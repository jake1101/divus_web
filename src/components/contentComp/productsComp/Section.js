import React from 'react';

import TopContent from './content/TopContent';
import ProductsContent from './content/ProductsContent';

export default function Section({ dp }) {
    return (
        <section style={dp} className="contSection">
            <div className="productsArticle">
                <TopContent />
                <ProductsContent
                    id={"cont_dd"}
                    className={"articleGray"}
                    title={"Damage Detection"}
                    utub={<iframe title="dd" width="893" height="486" src="https://www.youtube.com/embed/unFMQPEo5Ps" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                    text={`자동차는 운행, 주차 등 다양한 환경에서 불특정한 사고가 발생할 수 있으며 이로 인해 외관 상의 데미지(Scratch(흠집), Dent(찌그러짐), Crack(깨짐), Gab(틈 벌어짐), Paint(페인트의 덧칠) 등 5가지)의 형태 표출`}
                />
                <ProductsContent
                    id={"cont_cs"}
                    className={"articleBrown"}
                    title={"Car Segment"}
                    utub={<iframe title="cs" width="893" height="486" src="https://www.youtube.com/embed/A_aawqemun4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                    text={`Image Classification(이미지 인식 기술) 이미지 안에 있는 객체가 어떤 종류인지를 알아내는 기술 차량의 종류를 차량 제조사와 모델 수준에서 구분`}
                />
                <ProductsContent
                    id={"cont_cps"}
                    className={"articleDarkBlueGray"}
                    title={"Car Part Segment"}
                    utub={<iframe title="cps" width="893" height="486" src="https://www.youtube.com/embed/zf_ofinCQ3o" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                    text={`Segmentation(객체 분할 기술) 객체 인식 기술을 기반으로 객체의 종류 뿐 아니라 이미지에서 객체의 경계를 표시하는 기술 이미지 상에서 차량의 부품을 구분하는 것이 가능`}
                />
                <ProductsContent
                    id={"cont_an"}
                    title={"ANPR"}
                    className={"articleGray"}
                    utub={<iframe title="an" width="893" height="486" src="https://www.youtube.com/embed/-wDzbRuQfBU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                    text={`자동차번호, 차대번호 인식 기술의 개발을 위한 PoC를 추진 차량등록증, 자동차성능점검표 등 OCR 기술 및 손글씨 인식 기술 개발`}
                />
            </div>
        </section>
    )
}
