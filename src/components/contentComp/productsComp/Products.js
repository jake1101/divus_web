import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Section from './Section';
import FactorySection from './FactorySection';
import Footer from '../../publicComp/Footer';

const StyledWrap = styled.div`
    padding: 30px 20%;
`;

const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const StyledLinkDiv = styled.div`
    position: relative;
`;

const StyledTitleH3 = styled.h3`
    position: relative;
    display: inline-block;
    &:hover {
        color: #dcdbe1;
        cursor: pointer;
        border-bottom: 1px solid;
        margin-bottom: -1px;
    }
    z-index: 200;
`;

const StyledLinks = styled.div`
    position: absolute;
    display: flex;
    width: 520px;
`;

const StyledLink = styled.p`
    text-align: center;
    display: flex;
    margin-right: 30px;
    &:hover {
        color: #dcdbe1;
        cursor: pointer;
        border-bottom: 1px solid;
    }
    z-index: 202;
`;

export default function Products() {
    const props = {
        f: "OUR PRODUCTS ARE ABOUT",
        l: "TRANSFORMING YOUR BUSINESS.",
    }

    const [vsb, setVsb] = useState("hidden");
    const [sct, setSct] = useState("block");
    const [fsct, setFsct] = useState("none");

    const showCar = () => {
        setSct("block");
        setFsct("none");
        setVsb(vsbState => vsbState === "hidden" ? vsbState = "visible" : vsbState = "hidden");
    }

    const showFactory = () => {
        setSct("none");
        setFsct("block");
        setVsb("hidden");
    }

    const showLinks = () => {
        setVsb(vsbState => vsbState === "hidden" ? vsbState = "visible" : vsbState = "hidden");
    }

    const scroll = e => {
        const location = document.querySelector("#cont_" + e.target.id).offsetTop;
        window.scrollTo({ top: location - 300, behavior: "smooth" })
    }

    return (
        <div className="content">
            <Header {...props} />
            <StyledWrap>
                <StyledDiv>
                    <StyledLinkDiv>
                        <StyledTitleH3 className="linkTitle" onClick={showCar}>DOCTOR CAR AI</StyledTitleH3>
                        <StyledLinks style={{ visibility: vsb }} className="links" onMouseLeave={showLinks}>
                            <StyledLink id="dd" className="ank" onClick={scroll}>Damage Detection</StyledLink>
                            <StyledLink id="cs" className="ank" onClick={scroll}>Car Segment</StyledLink>
                            <StyledLink id="cps" className="ank" onClick={scroll}>Car Part Segment</StyledLink>
                            <StyledLink id="an" className="ank" onClick={scroll}>ANPR</StyledLink>
                        </StyledLinks>
                    </StyledLinkDiv>
                    <StyledLinkDiv>
                        <StyledTitleH3 className="showFactory" onClick={showFactory}>DOCTOR FACTORY AI</StyledTitleH3>
                    </StyledLinkDiv>
                </StyledDiv>
            </StyledWrap>
            <Section dp={{ display: sct }} />
            <FactorySection dp={{ display: fsct }} />
            <Footer />
        </div>
    )
}
