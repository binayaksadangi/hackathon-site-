import React from "react";
import { Card, CardContent, Icon } from "@mui/material";
import style from "../styles/About.module.css";
const Aboutcard = (props) => {
  return (
    <Card
      elevation={0}
      style={{ backgroundColor: "#F8F9FD", borderRadius: "20px" }}
    >
      <CardContent>
       <img src={props.icon} alt="" className={style.icon}/>
        <p className={style.card_heading}>{props.title}</p>
        <p className={style.card_text}>{props.content}</p>
      </CardContent>
    </Card>
  );
};

export default Aboutcard;
