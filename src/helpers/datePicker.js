import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { dateCreator } from "./dateCreator";

export default function MaterialUIPickers({setSelectedDate, selectedDate}) {


  const handleDateChange = (date) => {
    setSelectedDate(dateCreator(date));
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="flex-start">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy-MM-dd"
          margin="normal"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
