import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import style from "../styles/Home.module.css";
import rocket from "../assets/right.png";
import group1 from "../assets/group1.svg"
import group2 from "../assets/group2.svg"
import group3 from "../assets/group3.svg"
import Homecard from "./Homecard";
const Home = () => {
  return (
    <>
      <div className={style.main_container}>
 
      </div>
      <div className={style.lower_container}>
          <Homecard icon={group1} heading="100K+" text="AI model submission"/>
          <Homecard icon={group2} heading="50K+" text="Data Scientists"/>
          <Homecard icon={group3} heading="100+" text="AI Challenges hosted"/>
      </div>
    </>
  );
};

export default Home;

{/* <Container maxWidth={false}>
<Grid container className={style.main_grid}>
  <Grid
    container
    item
    xs={12}
    md={8}
    className={style.main_left_grid}
  >
    <Grid item xs={12} className={style.left_heading}>
      <p className={style.left_heading_text}>
        Accelerate Innovation with Global AI Challenges
      </p>
    </Grid>
    <Grid item xs={12} className={style.left_para}></Grid>
    <Grid item xs={12} className={style.left_btn}></Grid>
  </Grid>
  <Grid
    container
    item
    xs={0}
    md={4}
    className={style.main_right_grid}
  >
    <img className={style.right_img} src={rocket} alt="rocket" />
  </Grid>
</Grid>
</Container> */}