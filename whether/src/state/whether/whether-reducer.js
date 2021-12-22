import * as whetherTypes from "./whether-types";

const INITIAL_STATE = {
  whether: {
    name: "",
    description: "",
    temp: null,
    windSpeed: null,
    clouds: "",
  },
  selectedCities: [],
};

const whetherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case whetherTypes.GET_CITY_INFO:
      const {
        payload: { whether },
      } = action;
      const updatedCities = [...state.selectedCities];
      updatedCities.push(whether);
      return { selectedCities: [...updatedCities], whether: whether };
    case whetherTypes.EXIST_CITY:
      console.log(action.payload);
      return {
        selectedCities: [...state.selectedCities],
        whether: action.payload.whether,
      };
    // case whetherTypes.UPDATE_WHETHER
    default:
      return { ...state };
  }
};
export default whetherReducer;
