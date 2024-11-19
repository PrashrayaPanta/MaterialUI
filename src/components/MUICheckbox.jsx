import {
  FormControlLabel,
  Checkbox,
  Box,
  FormLabel,
  FormControl,
  FormGroup,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useState } from "react";
const MUICheckbox = () => {
  const [value, setValue] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.checked);
  };

  console.log(value);

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={<Checkbox onChange={handleChange} checked={value} />}
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={value}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>skills </FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  onChange={handleChange}
                  checked={value}
                  value="HTML"
                />
              }
            />
            <FormControlLabel label="CSS" value="CSS" />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MUICheckbox;
