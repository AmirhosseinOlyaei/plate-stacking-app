"use client"; // Add this line to mark as a Client Component

import React, { useState } from "react";

const AddPlateForm = ({ onAdd }) => {
  const [size, setSize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add plate via API
    if (onAdd) {
      onAdd(size);
    }
    setSize("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Plate</h2>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        placeholder="Enter plate size"
        required
      />
      <button type="submit">Add Plate</button>
    </form>
  );
};

export default AddPlateForm;
