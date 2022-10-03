import { Container, Grid } from "@mui/material";
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"
import icon4 from "../assets/icon4.svg"

import React from "react";
import style from "../styles/About.module.css";
import Cards from "./Aboutcard";
const About = () => {
  return (
    <div>
      <div className={style.heading_container}>
        <p className={style.heading}>
          Why Participate in
          <span className={style.heading_span}>  AI Challenges?</span>
        </p>
      </div>
      <div className={style.main_cont}> 
      <Container >
        <Grid container spacing={5}>
          <Grid container item spacing={5}>
            <Grid item md={6} sx={12}>
              <Cards
                title="Prove your skills"
                icon={icon2}
                content="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
              />
            </Grid>
            <Grid item md={6} sx={12}>
              <Cards
                title="Learn from community"
                icon={icon4}
                content="One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
              />
            </Grid>
          </Grid>
          <Grid container item spacing={5}>
            <Grid item md={6} sx={12}>
              <Cards
                title="Challenge yourself"
                icon={icon1}
                content="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
              />
            </Grid>
            <Grid item md={6} sx={12}>
              <Cards
                title="Earn recognition"
                icon={icon3}
                content="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      </div>
    </div>
  );
};

export default About;
