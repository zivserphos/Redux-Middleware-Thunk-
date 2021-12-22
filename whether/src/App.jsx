import React from "react";
import {useDispatch , useSelector} from "react-redux"
import { existCity, getCityInfo } from "./state/whether/whether-actions";
import City from "./core/City";
import { useRef } from "react";

 
function App() {
  const dispatch = useDispatch()
  const inputEl = useRef()
  const state = useSelector((state) => state)

  const handleCityInfo = () => {
    const {selectedCities} = state
    if (selectedCities.length > 0) {
      const whether = selectedCities.find((city) => {
        return city.name.toLowerCase() === inputEl.current.value
      }
        )
      if (whether) {
        console.log("here at exist")
        return dispatch(existCity(whether))
      }
    }
      return dispatch(getCityInfo(inputEl.current.value))
  }

  return <div className="App">
    <h1>write a city (starting with capital letters)</h1>
    <input ref={inputEl} type="text" placeholder="city">
    </input>
    <button onClick={() => handleCityInfo()}>DISPATCH ME</button>
    {state.whether.name ? (
    <City city={state.whether}/>) :<div></div>
  }
  </div>;
}

export default App;
