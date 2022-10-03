import React from "react";
import style from "../styles/Home.module.css";
import group1 from "../assets/group1.svg";
const Homecard = (props) => {
  return (
    <div className={style.group1}>
      <div className={style.group_img}>
        <img src={props.icon} alt="" />
      </div>
      <div className={style.group_text}>
        <p className={style.group_text_heading}>{props.heading}</p>
        <p className={style.group_text_para}>{props.text}</p>
      </div>
    </div>
  );
};

export default Homecard;
