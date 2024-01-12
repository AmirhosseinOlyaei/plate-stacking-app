"use client"; // This should be the very first line

import React, { useEffect, useState } from "react";

const PlateStack = () => {
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    fetch("/plates")
      .then((response) => response.json())
      .then((data) => setPlates(data.plates));
  }, []);

  return (
    <div>
      <h2>Current Plate Stack</h2>
      {plates.length === 0 ? (
        <p>No plates in the stack.</p>
      ) : (
        <ul>
          {plates.map((plate, index) => (
            <li key={index}>Plate size: {plate}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlateStack;
