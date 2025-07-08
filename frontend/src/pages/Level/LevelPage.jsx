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
  <div className="flex flex-col gap-y-1">
    {level.map((row, rowIndex) => (
      <div key={rowIndex} className="flex gap-x-1">
        {row.map((cell, colIndex) => (
          <div
            key={colIndex}
            className={`w-10 h-10 rounded ${
              cell === 0 ? "bg-gray-300" : "bg-green-400"
            }`}
          />
        ))}
      </div>
    ))}
  </div>
);
};

export default LevelPage