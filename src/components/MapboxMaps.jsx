import React, { useState } from "react";

import ReactMapboxGl, {
  Feature,
  Layer
} from "react-mapbox-gl";

import { getHourlyTemps } from "../api/Api";
import { transformData } from "../helpers/transformTools";
import TempDisplay from "./TempDisplay";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibWFudG91dmFsb3MtZGV2IiwiYSI6ImNrYmh0dzZkajA4c24ydHBqdjZvNDFqbGkifQ.1OEL9AYqEu8jJWdr6bYDxg",
});

const MapBoxMap = () => {
  const [data, setData] = useState([]);
  const [pinLocation, setPinLocation] = useState([23.65, 37.93]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const onMapPress = async (_, coords) => {
    const payload = coords.lngLat;
    setPinLocation([payload.lng, payload.lat]);

    try {
      setIsFetchingData(true);
      const reply = await getHourlyTemps(payload);
      const transformedData = transformData(reply.data);
      setData(transformedData);
    } catch (error) {
      setIsFetchingData(false);

      console.log(error);
    } finally {
      setIsFetchingData(false);
    }
  };

  return (
    <Map
      center={pinLocation}
      style="mapbox://styles/mapbox/streets-v8"
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
      onClick={onMapPress}
    >
      <TempDisplay data={data} isFetchingData={isFetchingData} />
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={pinLocation} />
      </Layer>
    </Map>
  );
};
export default MapBoxMap;
