type Camera = {
  camera_id: string;
  image: string;
  image_metadata: {
    height: number;
    width: number;
    md5: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  timestamp: string;
};

type Traffic = {
  cameras: Camera[];
  timestamp: string;
};

export type TrafficItems = {
  api_info: {
    status: string;
  };
  items: Traffic[];
};
