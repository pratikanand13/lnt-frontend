import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function DarkMode() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: "2rem" }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
}
