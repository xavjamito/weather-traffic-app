import React, { useEffect, useRef } from "react";

import LocationList from "../LocationList/LocationList";
import { DATE_FORMAT, TIME_FORMAT } from "../../constants";
import WeatherAPI from "../../api/WeatherAPI";

function makeCompact(locationData) {
  const areaMetaData = locationData["area_metadata"];
  const forecasts = locationData["items"][0]["forecasts"];

  const output = [];

  for (let i = 0; i < areaMetaData.length; i++) {
    const newData = {
      ...forecasts[i],
      coordinates: areaMetaData[i]["label_location"],
    };
    output.push(newData);
  }

  return output;
}

const WeatherLocation = ({ date, time, location, dispatch }) => {
  const allLocations = useRef([]);
  const currDate = useRef("");
  const currTime = useRef("");

  useEffect(() => {
    if (!date || !time) return;

    currDate.current = date.format(DATE_FORMAT);
    currTime.current = time.format(TIME_FORMAT);
    const getWeatherForecast = async () => {
      await WeatherAPI.getWeatherData()
        .then((res) => {
          allLocations.current = makeCompact(res);
        })
        .catch((err) => console.error(err));
    };

    getWeatherForecast();
  }, [date, time]);

  return (
    <div className="horizontal-align">
      <LocationList
        selectedLocation={location}
        locationList={allLocations.current}
        dispatch={dispatch}
      />
    </div>
  );
};

export default WeatherLocation;
