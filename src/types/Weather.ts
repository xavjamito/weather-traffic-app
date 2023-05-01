type Area = {
  name: string;
  label_location: {
    latitude: number;
    longitude: number;
  };
};

type Forecast = {
  area: string;
  forecast: string;
};

type Weather = {
  forecasts: Forecast[];
  timestamp: string;
  update_timestamp: string;
  valid_period: {
    start: string;
    end: string;
  };
};

export type WeatherItems = {
  api_info: {
    status: string;
  };
  area_metadata: Area[];
  items: Weather[];
};
