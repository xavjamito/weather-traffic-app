import { Card } from "antd";
import React from "react";

const WeatherDisplay = ({ location }: any) => {
  return (
    <Card
      title="2-Hr Weather Forecast"
      style={{ width: 300, textAlign: "center" }}
    >
      <p>{location["forecast"]}</p>
    </Card>
  );
};

export default WeatherDisplay;
