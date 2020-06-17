import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

import TempAndHumidBox from "./TempAndHumidBox";
import Styles from "./TempDisplay.styles";

const TempDisplay = ({ data, isFetchingData }) => {
  return (
    <div style={Styles.container}>
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
              humidity={info[date].humidity.value}
              date={date}
              key={index}
            />
          );
        })}
    </div>
  );
};

export default TempDisplay;
