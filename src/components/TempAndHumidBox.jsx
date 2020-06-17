import React from "react";

const TempAndHumidBox = ({ temperature,tempUnit, humidity,humidityUnit, date }) => {
  return (
    <div
      style={{
				height: '90px',
				padding: '10px',
				margin: '25px 10px 10px',
				overflowWrap: 'break-word',
				backgroundColor: 'lightgray',
				borderRadius: '4px',
				color: 'black',
				fontWeight: 'bold',
				minWidth: '90px',
      }}
    >
      {date}
      <br />
			Temp :
			<br />
      {`${temperature} ${tempUnit}`}
      <br />
      {`Humidity : ${humidity} ${humidityUnit}`}
    </div>
  );
};

export default TempAndHumidBox;
