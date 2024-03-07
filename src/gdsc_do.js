import React, { useState } from "react";
import angle from "./images/project .png";
import cost from "./images/competition.png";
import time from "./images/study_jam.png";
import pain from "./images/study.png";

const styles = {
  title: {
    textAlign: "center",
    fontSize: "24px",
    color:'grey',
    fontWeight: "bold",
    margin: "20px 0",
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "space-evenly",
    margin: "2em auto",
    padding: "0",
    overflow: "hidden", // Add overflow hidden
    position: "relative", // Add position relative
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "10px",
    width: "160px",
    height: "160px",
    paddingBottom: "100px",
    color:'grey',
    
  },
  text: {
    margin: "5px 0",
    fontWeight: "bold",
    fontcolor:'grey',
  },
  subtext: {
    fontStyle: "italic",
    color: "#grey",
    paddingBottom: "50px",
  },
  icon: {
    width: "150px",
    height: "150px",
  },
};

const IconItem = ({ icon, name, subtext }) => (
  <div style={styles.textBox}>
    <img src={icon} alt={name} style={styles.icon} />
    <p style={styles.text}>{name}</p>
    <p style={styles.subtext}>{subtext}</p>
  </div>
);

const ImageList = () => {
  const [iconData] = useState([
    {
      name: "Workshops and Projects",
      subtext: "Engaging in hands-on projects and workshops",
      icon: angle,
    },
    {
      name: "Competitions and Challenges",
      subtext: "Organizing coding competitions and challenges",
      icon: cost,
    },
    {
      name: "Study Jams",
      subtext:
        "Organizing study jams for collaborative learning and skill enhancement",
      icon: time,
    },
    {
      name: "Skill Development",
      subtext: "Focusing on skill development through study sessions",
      icon: pain,
    },
  ]);

  return (
    <div>
        <br></br>
      <h1 style={styles.title}>What GDSC SIT Does</h1>
      <div id="ures" style={styles.imageContainer}>
        {iconData.map((item, index) => (
          <IconItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ImageList;
