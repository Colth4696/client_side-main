import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import "./MapApi.css";
import RequestMarkers from "./RequestMarkers";

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB465RpcGT8xIHfVYXmsDZP657fvRgqQr0",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `450px` }} />,
        mapElement: <div style={{ height: `100%`, width: '70%' }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>

    <GoogleMap
        defaultZoom={18}
        defaultCenter={props.defaultCenter}>
        <RequestMarkers user={props.user} />
    </GoogleMap>

)


export default MyMapComponent