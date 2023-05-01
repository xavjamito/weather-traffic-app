import React from "react";

import { ACTIONS } from "../Home/Home";
import { Form, Select, Space } from "antd";

const LocationList = ({ selectedLocation, locationList, dispatch }: any) => {
  const { Option } = Select;
  const location = JSON.stringify(selectedLocation);

  return (
    <div className="location-list">
      <Space style={{ maxWidth: 200 }} direction="vertical">
        <Form style={{ width: "100%" }}>
          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true }]}
          >
            <Select
              id="select-location"
              placeholder="Select location"
              value={location === "{}" ? "" : location}
              onChange={(value) =>
                dispatch({
                  type: ACTIONS.SET_LOCATION,
                  payload: { location: JSON.parse(value) },
                })
              }
            >
              {locationList.map((location: any) => (
                <Option
                  key={`location-menuitem-${location["area"]}`}
                  value={JSON.stringify(location)}
                >
                  {location["area"]}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
};

export default LocationList;
