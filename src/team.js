import React, { useState } from "react";
import Button from "@mui/material/Button";
import About from "./technical";
import About2 from "./about2";

function CustomizedSwitches() {
  const [selectedTeam, setSelectedTeam] = useState("technical"); // Initialize the selected team state

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "5rem" }}
    >
      <Button
        variant="contained"
        onClick={() => handleTeamSelect("technical")}
        sx={{
          borderRadius: "2rem 0 0 2rem",
          backgroundColor: selectedTeam === "technical" ? "#0066A1" : "#757575",
          width: "40vw", // Adjust width using vw
        }}
      >
        <p className="text-4xl text-white">Technical Team</p>
      </Button>
      <Button
        variant="contained"
        onClick={() => handleTeamSelect("non-technical")}
        sx={{
          borderRadius: "0 2rem 2rem 0",
          backgroundColor: selectedTeam === "non-technical" ? "#0066A1" : "#757575",
          width: "40vw", // Adjust width using vw
        }}
      >
        <p className="text-4xl text-white">Non-Technical Team</p>
      </Button>
      <div>
        {selectedTeam === "technical" ? (
          <div style={{ marginTop: "3rem" }}>
            <About />
          </div>
        ) : (
          <div style={{ marginTop: "3rem" }}>
            <About2 />
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomizedSwitches;
