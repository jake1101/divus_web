import React, { useEffect } from 'react';

const { daum } = window;

function MapContent() {
    useEffect(() => {
            new daum.roughmap.Lander({
                "timestamp" : "1612976515378",
                "key" : "24ed2",
                "mapWidth" : "1000",
                "mapHeight" : "560"
            }).render();
    });
    return(
        <div id="daumRoughmapContainer1612976515378" className="root_daum_roughmap root_daum_roughmap_landing"></div>
    )
}

export default MapContent;