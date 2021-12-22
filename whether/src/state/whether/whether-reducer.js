import * as whetherTypes from "./whether-types";

const INITIAL_STATE = {
  whether: {
    name: "",
    description: "",
    temp: null,
    windSpeed: null,
    clouds: "",
  },
  selectedCities: [
    {
      london: {
        description: "overcast clouds",
        feelsLike: 1.14,
        name: "London",
        temp: 4.21,
        wind: 3.6,
      },
    },
    {
      brussels: {
        description: "clear sky",
        feelsLike: 2.21,
        name: "Brussels",
        temp: 2.21,
        wind: 1.03,
      },
    },
    {
      frankfurt: {
        description: "clear sky",
        feelsLike: -1.48,
        name: "Frankfurt am Main",
        temp: 0.9,
        wind: 2.06,
      },
    },
    {
      paris: {
        description: "mist",
        feelsLike: -3.6,
        name: "Paris",
        temp: -0.02,
        wind: 3.09,
      },
    },
    {
      "tel-aviv": {
        description: "broken clouds",
        feelsLike: 13.48,
        name: "Tel Aviv",
        temp: 13.68,
        wind: 3.6,
      },
    },
  ],
};

const whetherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case whetherTypes.GET_CITY_INFO:
      return { ...state, whether: action.payload.whether };
    case whetherTypes.EXIST_CITY:
      const whether = state.selectedCities.find(
        (existCity) => existCity === action.payload.city
      );
      return { ...state, whether };
    // case whetherTypes.UPDATE_WHETHER
    default:
      return { ...state };
  }
};
export default whetherReducer;
