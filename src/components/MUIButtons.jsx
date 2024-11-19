import Button from "@mui/material/Button";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import { IconButton, ToggleButton, ToggleButtonGroup } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

import FormatBoldIcon from "@mui/icons-material/FormatBold";

import FormatItalicIcon from "@mui/icons-material/FormatItalic";

import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import { useState } from "react";

export const MUIButtons = () => {
  const [formats, setFormats] = useState([]);

  const handleformatchange = (e) => {
    setFormats();
  };
  return (
    <>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button color="info" variant="contained">
        Info
      </Button>
      <Stack
        direction="row"
        spacing={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Button variant="contained" disableRipple>
          Register
        </Button>
        <Button variant="outlined">
          <PersonAddAltIcon />
          Add
        </Button>
        <Button variant="contained" color="secondary">
          Delete <DeleteIcon />
        </Button>
        <Button variant="contained">
          <EditIcon />
          Edit
        </Button>
      </Stack>

      <Stack direction="row" spacing={4}>
        <Button size="small" variant="contained">
          small
        </Button>
        <Button size="medium" variant="contained" endIcon={<DeleteIcon />}>
          Medium
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<DeleteIcon />}
          disableElevation
        >
          Large
        </Button>
        <IconButton color="success" size="large" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleformatchange}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
};
