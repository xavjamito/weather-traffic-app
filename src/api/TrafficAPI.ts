import axios from "axios";

const getTrafficData = async () => {
  return await axios
    .get("https://api.data.gov.sg/v1/transport/traffic-images", {
      responseType: "json",
    })
    .then((response) => response.data);
};

const TrafficAPI = {
  getTrafficData,
};

export default TrafficAPI;
