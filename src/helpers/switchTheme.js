import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const PurpleSwitch = withStyles({
  switchBase: {
    color: grey[100],
    "&$checked": {
      color: grey[800],
    },
    "&$checked + $track": {
      backgroundColor: grey[800],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function SwitchTheme() {
  const [theme, setTheme] = useState(true);

  const handleChange = () => {
    setTheme(!theme);
  };

  return (
    <FormGroup>
      <FormControlLabel
        label="Сменить тему"
        control={
          <PurpleSwitch
            checked={theme}
            onChange={handleChange}
            name="checkedA"
          />
        }
      />
    </FormGroup>
  );
}
