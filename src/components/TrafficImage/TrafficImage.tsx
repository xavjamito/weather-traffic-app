import React, { useEffect, useRef, useState } from "react";
import { DATE_FORMAT, TIME_FORMAT } from "../../constants";
import TrafficAPI from "../../api/TrafficAPI";

function locateCamera(data, coordinates) {
  const allCameras = data["items"][0]["cameras"];
  const loc = "location";
  const latitude = "latitude";
  const longitude = "longitude";

  const DIFFERENCE = 0.05;

  const camera = allCameras.find(
    (camera) =>
      Math.abs(camera[loc][latitude].toFixed(3) - coordinates[latitude]) <=
        DIFFERENCE &&
      Math.abs(camera[loc][longitude].toFixed(3) - coordinates[longitude]) <=
        DIFFERENCE
  );
  return camera;
}

const TrafficImage = ({ date, time, location }) => {
  const [camera, setCamera] = useState(null);
  const currDate = useRef("");
  const currTime = useRef("");

  useEffect(() => {
    currDate.current = date.format(DATE_FORMAT);
    currTime.current = time.format(TIME_FORMAT);
    const getTrafficImages = async () => {
      await TrafficAPI.getTrafficData()
        .then((res) => {
          setCamera(locateCamera(res, location["coordinates"]));
        })
        .catch((err) => console.error(err));
    };
    getTrafficImages();
  }, [date, time, location]);

  return camera ? (
    <img src={camera["image"]} alt="Camera footage" className="img" />
  ) : (
    <span>No image found</span>
  );
};

export default TrafficImage;
