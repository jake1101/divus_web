import React, { useEffect } from 'react';
import styled from 'styled-components';

import TopContent from './contents/TopContent';
import ProductsContent from './contents/ProductsContent';

import $ from 'jquery';

const StyledSection = styled.section`
    text-align: center;    
`;

const StyledArticleWrap = styled.div`
`;

const StyledTopArticle = styled.article`
    background: #111;
    padding: 30px 0 60px 0;
`;

const StyledProductsArticle = styled.article`
`;

const StyledProductsArticleWrap = styled.div`
`;

export default function Section() {
    useEffect(() => {
        const ddH = $("#dd")[0].offsetTop;
        const csH = $("#cs")[0].offsetTop;
        const cpsH = $("#cps")[0].offsetTop;
        const anH = $("#an")[0].offsetTop;

        const sclTo = function($id, dest){
            $id.off().on("click", () => {
                window.scrollTo({top: dest, left: 0, behavior: 'smooth'})
            });
        }

        sclTo($("#0"), ddH);
        sclTo($("#1"), csH);
        sclTo($("#2"), cpsH);
        sclTo($("#3"), anH);
    })
    
    return (
        <StyledSection>
            <StyledArticleWrap>
                <StyledTopArticle>
                    <TopContent />
                </StyledTopArticle>
                <StyledProductsArticle>
                    <StyledProductsArticleWrap>
                        <ProductsContent
                            id={"dd"}
                            className={"article1"}
                            title={"Damage Detection"}
                            utub={<iframe width="893" height="486" src="https://www.youtube.com/embed/unFMQPEo5Ps" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                            text={`자동차는 운행, 주차 등 다양한 환경에서 불특정한 사고가 발생할 수 있으며 이로 인해 외관 상의 데미지(Scratch(흠집), Dent(찌그러짐), Crack(깨짐), Gab(틈 벌어짐), Paint(페인트의 덧칠) 등 5가지)의 형태 표출`}
                        />
                        <ProductsContent
                            id={"cs"}
                            className={"article2"}
                            title={"Car Segment"}
                            utub={<iframe width="893" height="486" src="https://www.youtube.com/embed/A_aawqemun4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                            text={`Image Classification(이미지 인식 기술) 이미지 안에 있는 객체가 어떤 종류인지를 알아내는 기술 차량의 종류를 차량 제조사와 모델 수준에서 구분`}
                        />
                        <ProductsContent
                            id={"cps"}
                            className={"article3"}
                            title={"Car Part Segment"}
                            utub={<iframe width="893" height="486" src="https://www.youtube.com/embed/zf_ofinCQ3o" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                            text={`Segmentation(객체 분할 기술) 객체 인식 기술을 기반으로 객체의 종류 뿐 아니라 이미지에서 객체의 경계를 표시하는 기술 이미지 상에서 차량의 부품을 구분하는 것이 가능`}
                        />
                        <ProductsContent
                            id={"an"}
                            title={"ANPR"}
                            className={"article4"}
                            utub={<iframe width="893" height="486" src="https://www.youtube.com/embed/-wDzbRuQfBU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                            text={`자동차번호, 차대번호 인식 기술의 개발을 위한 PoC를 추진 차량등록증, 자동차성능점검표 등 OCR 기술 및 손글씨 인식 기술 개발`}
                        />
                    </StyledProductsArticleWrap>
                </StyledProductsArticle>
            </StyledArticleWrap>
        </StyledSection>
    )
}
