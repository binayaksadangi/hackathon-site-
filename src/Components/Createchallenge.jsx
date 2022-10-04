import React, { useState } from "react";
import { Box } from "@mui/system";
import style from "../styles/Form.module.css";
import DatePicker from "react-date-picker";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Container,
  Typography,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import upload from "../assets/upload.svg";
const Createchallenge = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [level, setLevel] = useState("");

  const handleChange = (event) => {
    setLevel(event.target.value);
  };
  return (
    <>
      <Box>
        <Box className={style.header}>
          <Container maxWidth="xl">
            <p className={style.heading}>Challenge Details</p>
          </Container>
        </Box>
        <Container maxWidth="xl">
          <form action="">
            <Box className={style.form}>
              <p className={style.sub_heading}>Challenge Name</p>
              <input type="text" name="name" className={style.name} id="name" />
              <p className={style.sub_heading}>Start Date</p>
              <DatePicker
                onChange={setStartDate}
                value={startDate}
                className={style.datePicker}
              />
              <p className={style.sub_heading}>End Date</p>
              <DatePicker
                onChange={setEndDate}
                value={endDate}
                className={style.datePicker}
              />
              <p className={style.sub_heading}>Description</p>
              <textarea type="text" className={style.desc} name="desc" />
              <p className={style.sub_heading}>Image</p>

              <input
                accept="image/*"
                // className={classes.input}
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="outlined"
                  color="secondary"
                  component="span"
                  endIcon={<CloudUploadIcon />}
                  sx={{
                    paddingTop: "13px",
                    paddingBottom: "13px",
                    paddingLeft: "70px",
                    paddingRight: "70px",
                    fontFamily: "Inter",
                    fontSize: "18px",
                  }}
                >
                  Upload
                </Button>
              </label>
              <p className={style.sub_heading}>Level Type</p>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={level}
                label="Age"
                onChange={handleChange}
                color="secondary"
                className={style.level}
              >
                <MenuItem value={10}>Easy</MenuItem>
                <MenuItem value={20}>Medium</MenuItem>
                <MenuItem value={30}>Hard</MenuItem>
              </Select>
              <Button variant="contained" color="success" sx={{marginBottom:"67px"}}className={style.btn}>Create Challenge</Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Createchallenge;
