import React, { Component } from "react";
import geolocated from "react-geolocated";

class Geolocated extends Component {

    componentDidMount(){
        this.setState= {geolocated}
    };

    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{this.props.coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{this.props.coords.longitude}</td>
                    </tr>
                    </tbody>
                    </table>
        ) : (
            <div>Getting the Location</div>
        );
    }
}

export default Geolocated