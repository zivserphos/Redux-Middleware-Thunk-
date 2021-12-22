import * as whetherTypes from "./whether-types";
import axios from "axios";

export const getCityInfo = (cityName) => async (dispatch) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=10b0d2b58718b705da51157712a6320e`
  );
  const whether = {
    name: response.data.name,
    temp: response.data.main.temp,
    wind: response.data.wind.speed,
    description: response.data.weather[0].description,
    feelsLike: response.data.main["feels_like"],
  };

  dispatch({
    type: whetherTypes.GET_CITY_INFO,
    payload: {
      whether,
    },
  });
};

export const existCity = (whether) => {
  return {
    type: whetherTypes.EXIST_CITY,
    payload: {
      whether,
    },
  };
};
