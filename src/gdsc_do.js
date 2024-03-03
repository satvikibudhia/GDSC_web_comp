import React, { useState } from "react";
import angle from "./images/project.png";
import cost from "./images/competition.png";
import time from "./images/study_jam.png";
import pain from "./images/study.png";

const styles = {
  imageContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "space-evenly",
    margin: "2em auto",
    padding: "0",
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
  },
  text: {
    margin: "5px 0",
    fontWeight: "bold",
  },
  subtext: {
    fontStyle: "italic",
    color: "#888",
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
      name: "Precise Joint Angle Measurement",
      subtext: "Accurate angle measurement with no human error",
      icon: angle,
    },
    {
      name: "Cost Efficient",
      subtext: "The device is economical and requires little to no maintenance",
      icon: cost,
    },
    {
      name: "Time Saving",
      subtext:
        "Saves travel time for the patients and helpful for those who are unable to travel",
      icon: time,
    },
    {
      name: "Pain Localization and Intensity",
      subtext: "Localizes pain and its intensity for further assessment",
      icon: pain,
    },
  ]);

  return (
    <div id="ures" style={styles.imageContainer}>
      {iconData.map((item, index) => (
        <IconItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ImageList;
