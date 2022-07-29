import React, {useEffect} from "react";

function GoogleMaps(props) {
    useEffect(() => {
        const iframeData = document.getElementById("iframeId")
        iframeData.src=`https://maps.google.com/maps?q=${props.lat},${props.lng}&hl=es;&output=embed`
    })

    return(
        <div>
            <iframe id="iframeId" height="550px" width="100%" title={props.title}></iframe>
        </div>
    );
}

export default GoogleMaps