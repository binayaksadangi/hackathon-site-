import React from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import style from "../styles/Home.module.css";
import rocket from "../assets/right.png";
import group1 from "../assets/group1.svg";
import group2 from "../assets/group2.svg";
import group3 from "../assets/group3.svg";
import Homecard from "./Homecard";
import { Link } from "react-router-dom";
const ColorButton = styled(Button)(({ theme }) => ({
  color: "#003145",
  borderRadius:"10px",
  fontFamily:"poppins"
  
}));

const Home = () => {
  return (
    <>
      <div className={style.main_container}>
        <div className={style.main_holder}>
          {/* content box */}
          <div className={style.left_box}>
            <div className={style.left_divider}></div>
            <div className={style.content_box}>
              <p className={style.heading}>
                Accelerate Innovation with Global AI Challenges
              </p>
              <p className={style.para}>
                AI Challenges at DPhi simulate real-world problems. It is a
                great place to put your AI/Data Science skills to test on
                diverse datasets allowing you to foster learning through
                competitions.
              </p>
              <Link to="/createchallenge" >
                <ColorButton variant="contained">Create Challenge</ColorButton>
              </Link>
            </div>
          </div>
          {/* img box */}
          <div className={style.right_box}>
            <img src={rocket} alt="" className={style.right_box_img} />
          </div>
        </div>
      </div>

      {/* lower container */}
      <div className={style.lower_container}>
        <div className={style.holder}>
          <Homecard icon={group1} heading="100K+" text="AI model submission" />
          <div className={style.divider}></div>
          <Homecard icon={group2} heading="50K+" text="Data Scientists" />
          <div className={style.divider}></div>
          <Homecard icon={group3} heading="100+" text="AI Challenges hosted" />
        </div>
      </div>
    </>
  );
};

export default Home;

