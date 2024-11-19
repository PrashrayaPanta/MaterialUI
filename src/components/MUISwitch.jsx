import { Box, FormControlLabel, Switch } from "@mui/material";

import React, { useState } from "react";

const MUISwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  // console.log(checked);

  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            // size="small"
            // color="success"
          />
        }
      />
    </Box>
  );
};

export default MUISwitch;
