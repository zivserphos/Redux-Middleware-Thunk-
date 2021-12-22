import * as whetherTypes from "./whether-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: "iPad 4 mini - ",
      price: "$500.1",
      amount: 2,
    },
    {
      id: 2,
      joke: "dont buy it",
      name: "H&M T-Shirt white - ",
      price: "$10.99",
      amount: 10,
    },
    {
      id: 3,
      joke: "that is very sad",
      name: "Charli-XCX - sucker CD - ",
      price: "$19.99",
      amount: 5,
    },
  ],

  cart: [],
  total: 0.0,
};

const whetherReducer = {
  a: "g",
  b: "z",
};
export default whetherReducer;
