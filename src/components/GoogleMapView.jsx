import React, { Component } from "react";

import {
  GoogleMap,
  LoadScript
} from "@react-google-maps/api";

const containerStyle = {
  width: "1200px",
  height: "600px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

class GoogleMapView extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyAKUtMqdLBAPggUfikrsLwd1V4ubGb1f1k">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default GoogleMapView;
