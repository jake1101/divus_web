import React, { useEffect } from 'react'
import styled from 'styled-components';

import PageLinkComp from '../productsComp/contents/PageLinkComp';

const StyledTopArticle = styled.article`
    height: 530px;
`;

const StyledTitleH1 = styled.h1`
    text-align: center;
    font-size: 30px;
    padding: 200px 0 200px 0;
`;

const StyledLinksWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export default function TopArticle(props) {

    useEffect(function(){
        let i = 0;
        const linkTitle = document.getElementsByClassName("linkTitle");
        console.log(props);
        
        for(i; i<linkTitle.length; i++){
            linkTitle[i].addEventListener("click", function() {
                const linkWrap = this.parentNode.parentNode.children[1];

                if(linkWrap.style.visibility === "hidden" || !linkWrap.style.visibility){
                    linkWrap.style.visibility = "visible";
                    linkWrap.addEventListener("mouseleave", () => linkWrap.style.visibility = "hidden");
                }else{
                    linkWrap.style.visibility = "hidden";
                }
            })
        }
        
    })
    
    return (
            <StyledTopArticle>
                <StyledTitleH1>{props.f}<br />{props.l}</StyledTitleH1>
                <StyledLinksWrap>
                    <PageLinkComp title={"DOCTOR CAR AI"} link={["Damage Detection","Car Segment","Car Part Segment","ANPR"]} />
                    <PageLinkComp title={"DOCTOR FACTORY AI"} link={""}/>
                </StyledLinksWrap>
            </StyledTopArticle>
    )
}
