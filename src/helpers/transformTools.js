import moment from "moment";

const DATEFORMAT = "dd Do hA";
export const transformData = (data) => {


  let transformedData = [];

  Object.keys(data.temperature2m.data).forEach((date) => {
        transformedData.push({
      [moment(date).format(DATEFORMAT)]: {
        humidity: {
          value: data.rh2m.data[date].toPrecision(4),
          unit: data.rh2m.unit,
          description: data.rh2m.description,
        },
        temperature: {
          value: data.temperature2m.data[date].toPrecision(4),
          unit: data.temperature2m.unit,
          description: data.temperature2m.description,
        },
      },
    });
  });

  return transformedData;
};
