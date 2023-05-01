import React from "react";

import { DatePicker, TimePicker } from "antd";
import { DATE_FORMAT } from "../../constants";
import { Dayjs } from "dayjs";
import { ACTIONS } from "../Home/Home";

type DateTimeProps = {
  date: Dayjs;
  time: Dayjs;
  dispatch: ({ type, payload }: any) => void;
};

const DateTimeField = ({ date, time, dispatch }: DateTimeProps) => {
  return (
    <div className="horizontal-align">
      <DatePicker
        placeholder="Date"
        format={DATE_FORMAT}
        value={date}
        onChange={(newDate) =>
          dispatch({
            type: ACTIONS.SET_DATE,
            payload: { date: newDate },
          })
        }
        style={{ width: "100%" }}
      />
      <TimePicker
        placeholder="Time"
        value={time}
        onChange={(newTime) =>
          dispatch({
            type: ACTIONS.SET_TIME,
            payload: { time: newTime },
          })
        }
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default DateTimeField;
