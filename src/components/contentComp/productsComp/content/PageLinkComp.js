import React, { useEffect } from 'react'
import styled from 'styled-components';

import PageLink from './PageLink';

const StyledLinksWrap = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
`;

export default function TopArticle(props) {

    useEffect(function () {
        let i = 0;
        const linkTitle = document.getElementsByClassName("linkTitle");

        for (i; i < linkTitle.length; i++) {
            linkTitle[i].addEventListener("click", function () {
                const linkWrap = this.parentNode.parentNode.children[1];

                if (linkWrap.style.visibility === "hidden" || !linkWrap.style.visibility) {
                    linkWrap.style.visibility = "visible";
                    linkWrap.addEventListener("mouseleave", () => linkWrap.style.visibility = "hidden");
                } else {
                    linkWrap.style.visibility = "hidden";
                }
            })
        }

    })

    return (
        <StyledLinksWrap className={"pageLinkComp"}>
            <PageLink title={"DOCTOR CAR AI"} link={["Damage Detection", "Car Segment", "Car Part Segment", "ANPR"]} />
            <PageLink title={"DOCTOR FACTORY AI"} link={""} />
        </StyledLinksWrap>
    )
}
