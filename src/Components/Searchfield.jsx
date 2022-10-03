import React from "react";
import style from "../styles/Search.module.css";
import { InputAdornment, TextField, IconButton,InputLabel,MenuItem,ListSubheader,FormControl,Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/system";
const Searchfield = () => {
  return (
    <>
      <div className={style.search_area}>
        <div className={style.heading_box}>
          <p className={style.heading}>Explore Challenges</p>
        </div>
        <div className={style.search_box}>
          <div className={style.search_bar}>
            <TextField
              className={style.field}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={style.filter}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
              <Select defaultValue="" id="grouped-select" label="Grouping">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <ListSubheader>Category 1</ListSubheader>
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <ListSubheader>Category 2</ListSubheader>
                <MenuItem value={3}>Option 3</MenuItem>
                <MenuItem value={4}>Option 4</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchfield;

{
  /* <Container>
<div >
  <div className={style.field_container}>
  <TextField
   className={style.field}
    InputProps={{
      startAdornment: (
        <InputAdornment position='start'>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      )
    }}
  />
  </div>

</div>

</Container> */
}
