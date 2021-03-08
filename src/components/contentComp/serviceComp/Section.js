import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DemoLogin from './DemoLogin';

const Section = () => {
  const StyledArticle = styled.h2`
    margin: 150px 0;
  `;

  const StyledLinkBtn = styled.h2`
    font-size: 30px;
    color: white;
  `;

  const linkBox = {
    border: "1px solid black",
    background: "#495054",
    borderRadius: "5px",
    margin: "60px 0 0 0",
    padding: "10px",
    display: "inline-block"
  }
  return (
    <section className="contSection">
      <article className="articleLightBlueGray articleClass contactArticle">
        <StyledArticle>
          <DemoLogin />
          <Link to={"/contact"} style={linkBox}>
            <StyledLinkBtn className={"linkClass"}>
              문의하기
            </StyledLinkBtn>
          </Link>
        </StyledArticle>
      </article>
    </section>
  )
}

export default Section
