import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Stack,
  FormHelperText,
} from "@mui/material";

import Select from "@mui/material/Select";

import { useState } from "react";

// import Box from "@mui/material/Box";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const MUISelect = () => {
  //   const [country, setCountry] = useState("");

  //   const handleChange = ({ target }) => {
  //     setCountry(target.value);
  //   };
  //   console.log({ country });

  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;

    // console.log(value);

    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  console.log(countries);

  return (
    // <Box width="250px">
    //   <TextField
    //     label="Select Country"
    //     select
    //     value={country}
    //     onChange={handleChange}
    //     fullWidth
    //   >
    //     <MenuItem value="npl">Nepal</MenuItem>
    //     <MenuItem value="ind">India</MenuItem>
    //     <MenuItem value="bangla">Bangladesh</MenuItem>
    //   </TextField>
    // </Box>

    <>
      {/* <TextField
        label="Select Countries"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        multiple
      > */}
      <Stack spacing={10}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={countries}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            // MenuProps={MenuProps}
            // size="small"
            size="large"
            // error
          >
            <MenuItem value="nepal">Nepal</MenuItem>
            <MenuItem value="india">India</MenuItem>
            <MenuItem value="bangladesh">Bangladesh</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={countries}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
            fullWidth
            error
          >
            <MenuItem value="aus">Australia</MenuItem>
            <MenuItem value="america">America</MenuItem>
            <MenuItem value="canada">Canada</MenuItem>
          </Select>
          <FormHelperText>Error</FormHelperText>
        </FormControl>
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
          }}
          error={countries.length <= 0}
        >
          <InputLabel id="demo-simple-select-error-label">
            Select Country
          </InputLabel>
          <Select
            labelId="demo-simple-select-error-label"
            id="demo-simple-select-error"
            multiple
            value={countries}
            label="Select Country"
            onChange={handleChange}
            renderValue={(value) => `${value}`}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>
            {/* {console.log(countries.length <= 0 ? "Required" : "Fine")} */}
            {countries.length <= 0 ? "Required" : null}
          </FormHelperText>
        </FormControl>
      </Stack>
    </>
  );
};
