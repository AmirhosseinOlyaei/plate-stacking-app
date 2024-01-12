"use client"; // Add this line to mark as a Client Component

import React, { useState } from "react";

const RemovePlateForm = ({ onRemove }) => {
  const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remove plates via API
    if (onRemove) {
      onRemove(num);
    }
    setNum("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Remove Plates</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Number of plates to remove"
        required
      />
      <button type="submit">Remove Plates</button>
    </form>
  );
};

export default RemovePlateForm;
