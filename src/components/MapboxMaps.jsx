import React, { useState } from "react";

import ReactMapboxGl, {
  Feature,
  Layer
} from "react-mapbox-gl";

import { Button } from "@material-ui/core";

import { getHourlyTemps } from "../api/Api";
import { transformData } from "../helpers/transformTools";
import Styles from "./MapboxMaps.styles";
import TempDisplay from "./TempDisplay";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibWFudG91dmFsb3MtZGV2IiwiYSI6ImNrYmh0dzZkajA4c24ydHBqdjZvNDFqbGkifQ.1OEL9AYqEu8jJWdr6bYDxg",
});

const MapBoxMap = () => {
  const [data, setData] = useState([]);
  const [pinLocation, setPinLocation] = useState([23.65, 37.93]);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [orderType, setOrderType] = useState("ASC");

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

  const orderDates = () => {
    if (data.length === 0) return;

    const test = [];
    data.forEach((item) => {
      test.unshift(item);
    });

    changeOrderType();
    setData(test);
  };

  const changeOrderType = () => {
    setOrderType(orderType === "DESC" ? "ASC" : "DESC");
  };

  return (
    <Map
      center={pinLocation}
      style="mapbox://styles/mapbox/streets-v8"
      containerStyle={Styles.map}
      onClick={onMapPress}
    >
      <Button
        style={Styles.button}
        variant="contained"
        color="primary"
        onClick={orderDates}
      >
        Sort by date ({orderType})
      </Button>
      <TempDisplay
        data={data}
        isFetchingData={isFetchingData}
        location={pinLocation}
      />
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={pinLocation} />
      </Layer>
    </Map>
  );
};
export default MapBoxMap;
