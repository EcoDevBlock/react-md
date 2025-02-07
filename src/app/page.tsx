"use client";

import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { LinearProgress } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [{ textvalue, selectValue }, setOption] = useState({
    textvalue: 0,
    selectValue: "",
  });
  const updateTextOption = (e: any) => {
    setOption((currOption) => ({ ...currOption, textvalue: e.target.value }));
  };

  const onSelectChange = (event: SelectChangeEvent) => {
    setOption((currOption) => ({
      ...currOption,
      selectValue: event.target.value,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FFF",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h1>home</h1>
      <InputLabel id="demo-simple-select-label">Select Progress</InputLabel>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={(e) => updateTextOption(e)}
      />
      <Select
        id="demo-simple-select"
        value={selectValue}
        label="Age"
        onChange={onSelectChange}
      >
        <MenuItem value={"progess_1"}>Progress 1</MenuItem>
        <MenuItem value={"progress_2"}>Progress 2</MenuItem>
      </Select>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFF",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {selectValue === "progess_1" && textvalue > 0 && (
          <LinearProgress
            variant="determinate"
            sx={{ width: "20px" }}
            value={textvalue}
            color="success"
          />
        )}
        {selectValue === "progress_2" && (
          <LinearProgress
            variant="determinate"
            sx={{ width: "20px" }}
            value={textvalue}
            color="error"
          />
        )}
      </Box>
    </Box>
  );
}
