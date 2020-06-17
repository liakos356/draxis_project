import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

import TempAndHumidBox from "./TempAndHumidBox";
import Styles from "./TempDisplay.styles";

const PRECISION_LEVEL_OF_COORDS = 6;

const TempDisplay = ({ data, isFetchingData, location }) => {

  return (
    <div style={Styles.container}>
      {!isFetchingData && (
        <div style={Styles.locationInfo}>
          Location{" "}
          {`${location[0].toPrecision(
            PRECISION_LEVEL_OF_COORDS
          )} , ${location[1].toPrecision(PRECISION_LEVEL_OF_COORDS)}`}
        </div>
      )}
      {data.length === 0 && (
        <div style={Styles.emptyContainer}>
          <br />
          <br />
          <br />
          Please click on a valid location around Greece
        </div>
      )}
      {isFetchingData && (
        <div style={Styles.loadingOverlay}>
          <CircularProgress />
        </div>
      )}
      {data &&
        !isFetchingData &&
        data.map((info, index) => {
          const date = Object.keys(info)[0];
          return (
            <TempAndHumidBox
							temperature={info[date].temperature.value}
							tempUnit={info[date].temperature.unit}
							humidity={info[date].humidity.value}
							humidityUnit={info[date].humidity.unit}
              date={date}
              key={index}
            />
          );
        })}
    </div>
  );
};

export default TempDisplay;
