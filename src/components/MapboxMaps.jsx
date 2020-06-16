import React from "react";

import ReactMapboxGl, { Feature, Layer } from "react-mapbox-gl";

import { getHourlyTemps } from "../api/Api";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibWFudG91dmFsb3MtZGV2IiwiYSI6ImNrYmh0dzZkajA4c24ydHBqdjZvNDFqbGkifQ.1OEL9AYqEu8jJWdr6bYDxg",
});

const onMapPress = async (_, coords) => {
  const payload = coords.lngLat;

  try {
    const temps = await getHourlyTemps(payload);
    console.log(temps);
  } catch (error) {
    console.log(error);
  }
};

const MapBoxMap = () => {
  return (
    <Map
      center={[23.65, 37.93]}
      style="mapbox://styles/mapbox/streets-v8"
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
      onRegionDidChange={onMapPress}
      onClick={onMapPress}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[23.65, 37.93]} />
      </Layer>
    </Map>
  );
};

export default MapBoxMap;
