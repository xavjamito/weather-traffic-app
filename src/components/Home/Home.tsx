import React, { useReducer } from "react";

import "./Home.css";
import DateTimeField from "../DateTime/DateTime";
import dayjs from "dayjs";
import WeatherLocation from "../WeatherLocation/WeatherLocation";
import TrafficImage from "../TrafficImage/TrafficImage";
import WeatherDisplay from "../WeatherLocation/WeatherDisplay";

export const ACTIONS = {
  SET_TIME: "setTime",
  SET_DATE: "setDate",
  SET_LOCATION: "setLocation",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DATE:
      return { ...state, date: action.payload.date };
    case ACTIONS.SET_TIME:
      return { ...state, time: action.payload.time };
    case ACTIONS.SET_LOCATION:
      return { ...state, location: action.payload.location };
    default:
      return state;
  }
};

const Home: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    date: dayjs(),
    time: dayjs(),
    location: {},
  });

  return (
    <div className="container">
      <div className="main">
        <div className="body">
          <DateTimeField
            date={state["date"]}
            time={state["time"]}
            dispatch={dispatch}
          />
          <WeatherLocation
            date={state["date"]}
            time={state["time"]}
            location={state["location"]}
            dispatch={dispatch}
          />
          <div className="flex">
            {Object.keys(state["location"]).length > 0 && (
              <WeatherDisplay location={state["location"]} />
            )}
          </div>
          {state["date"] &&
            state["time"] &&
            Object.keys(state["location"]).length !== 0 && (
              <TrafficImage
                date={state["date"]}
                time={state["time"]}
                location={state["location"]}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default Home;
