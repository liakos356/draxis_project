import React from "react";

const TempAndHumidBox = ({ temperature, humidity, date }) => {
  return (
    <div
      style={{
        width: "80px",
        height: "80px",
        backgroundColor: "red",
        margin: "10px",
        overflowWrap: "break-word",
      }}
    >
      Date:
      {'\n'+date}
      Temp:
      {"\n" + temperature}
      Humidity:
      {"\n" + humidity}
    </div>
  );
};

export default TempAndHumidBox;
