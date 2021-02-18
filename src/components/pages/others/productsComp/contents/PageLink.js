import React from 'react'
import styled from 'styled-components';

const StyledLinksDiv = styled.div`
    position: relative;
    display: inline;
    width: 100%;
    z-index: 101;
`;

const StyledLinkTitle = styled.div`
    position: relative;
    text-align: center;
`;

const StyledTitleH3 = styled.h3`
    position: relative;
    display: inline-block;
    &:hover {
        color: #dcdbe1;
        cursor: pointer;
    }
    z-index: 200;
`;

const StyledLinkWrap = styled.div`
    display: inline;
    text-align: center;
    visibility: hidden;
    position: absolute;
    top: 24px;
    left: 0;
    width: 100%;
    height: 40px;
    z-index: 201;
`;

const StyledLink = styled.span`
    position: sticky;
    width: 100%;
    padding-right: 30px;
    &:hover {
        color: #dcdbe1;
        cursor: pointer;
    }
    z-index: 202;
`;

export default function PageLinkComp(props) {
    let element = [];
    
    if(props.link.length > 0){
        for(var i = 0; i<props.link.length; i++){
            element.push(<StyledLink id={i} key={i}>{props.link[i]}</StyledLink>)
        }
    }else{
        element = "";
    }

    return (
        <StyledLinksDiv className={"linkDiv"}>
            <StyledLinkTitle>
                <StyledTitleH3 className={"linkTitle"}>{props.title}</StyledTitleH3>
            </StyledLinkTitle>
            <StyledLinkWrap>
                {element}
            </StyledLinkWrap>
        </StyledLinksDiv>
        
    )
}
