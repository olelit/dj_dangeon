import React, { useEffect, useState } from "react";
import { getLevelData } from "../../services/levelApi";
import "./LevelPage.css"

const LevelPage = () => {
  const [level, setLevel] = useState([]);

  useEffect(() => {
    getLevelData().then(data => {
      setLevel(data.data);
    });
  }, []);

  return (
    <div className="level-container">
      {level.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${cell === 0 ? "black" : "blue"}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default LevelPage