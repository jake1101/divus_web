import React, { useEffect } from 'react';
import styled from 'styled-components';

const { daum } = window;

const StyledMapDiv = styled.div`
    display: flex;
    justify-content: center;
`;

function MapContent() {
    useEffect(() => {
            new daum.roughmap.Lander({
                "timestamp" : "1612976515378",
                "key" : "24ed2",
                "mapWidth" : "3000",
                "mapHeight" : "600"
            }).render();
    });

    return(
        <StyledMapDiv>
            <div id="daumRoughmapContainer1612976515378" className="root_daum_roughmap root_daum_roughmap_landing"></div>
        </StyledMapDiv>
        
    )
}

export default MapContent;