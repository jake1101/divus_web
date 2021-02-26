import React, { useEffect } from 'react';
import styled from 'styled-components';

const { daum } = window;

const StyledMapWrap = styled.div`
    padding: 60px 20% 60px 20%;
`;

const StyledMapDiv = styled.div`
    display: flex;
    justify-content: center;
`;

function MapContent() {
  useEffect(() => {
    const map = document.getElementsByClassName("wrap_map");
    console.log(map.length);
    if (!map.length) {
      new daum.roughmap.Lander({
        "timestamp": "1612976515378",
        "key": "24ed2",
        "mapWidth": "3000",
        "mapHeight": "600"
      }).render();
    }
  })

  return (
    <StyledMapWrap className="article3">
      <StyledMapDiv>
        <div id="daumRoughmapContainer1612976515378" className="root_daum_roughmap root_daum_roughmap_landing"></div>
      </StyledMapDiv>
    </StyledMapWrap>
  )
}

export default MapContent;