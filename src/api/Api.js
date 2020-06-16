import axios from "axios";

// "https://api.draxis.gr/weather/meteo/hourly?apikey=4181a631-652a-40a2-a57f-e8338074cc5a&lat=37.983810&lon=23.727539&at_date=2020-06-18&variables=temperature2m,rh2m";
const URL = "https://api.draxis.gr/weather/meteo/hourly";
const API_KEY = "4181a631-652a-40a2-a57f-e8338074cc5a";
const DATE = "20-06-18";

export const getHourlyTemps = ({ lng, lat, date }) => {
  // get(`/tickets/${ticketId}?ticket_type=${ticketType}`);

  return axios.get(
    `${URL}?apikey=${API_KEY}&lat=${lat}&lon=${lng}&at_date=2020-06-18&variables=temperature2m,rh2m`
  );
};
