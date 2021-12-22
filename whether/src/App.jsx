import React from "react";
import {useDispatch , useSelector} from "react-redux"
import { getCityInfo } from "./state/whether/whether-actions";
import City from "./core/City";
import { useRef } from "react";

 
function App() {
  const dispatch = useDispatch()
  const inputEl = useRef()
  const state = useSelector((state) => state)
  return <div className="App">
    <h1>write a city (starting with capital letters)</h1>
    <input ref={inputEl} type="text" placeholder="city">
    </input>
    <button onClick={() => dispatch(getCityInfo(inputEl.current.value))}>DISPATCH ME</button>
    {state.whether.name ? (
    <City city={state.whether}/>) :<div></div>
  }
  </div>;
}

export default App;
