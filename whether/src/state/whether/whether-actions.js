import * as whetherTypes from "./whether-types";

export const getCityInfo = (cityName) => {
  return {
    type: whetherTypes.GET_CITY_INFO,
    payload: {
      city: cityName,
    },
  };
};

export const myLogger = (store) => (next) => (action) => {
  console.log("im on the middleware");
};
// export const adjustQty = (itemID, value) => {
//   return {
//     type: whetherTypes.ADJUST_QTY,
//     payload: {
//       id: itemID,
//       qty: value,
//     },
//   };
// };
