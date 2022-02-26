import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function ToggleMode({ theme, switchTheme, showAlert }) {
  const [pos, setPos] = useState("");
  const toggleBtn = () => {
    setPos(pos === "" ? "translate-x-7" : "");
    document.body.classList.toggle("dark");
    document.body.classList.toggle(`bg-gray-900`);
    showAlert(
      "Success!",
      document.body.classList.contains("dark")
        ? "Dark Mode has been Enabled"
        : "Light Mode has been Enabled",
      theme
    );
  };
  return (
    <div className="flex items-center gap-4">
      <ThemeSwitcher
        switchTheme={switchTheme}
        theme={theme}
        showAlert={showAlert}
      />
      <div
        title="Toggle Dark Mode"
        id="toggle"
        className={`w-12 h-6 rounded-2xl relative bg-gray-200 cursor-pointer dark:bg-gray-400`}
        onClick={toggleBtn}
      >
        <span
          className={`${pos} w-5 h-5 bg-${theme}-600 rounded-full absolute top-[0.15rem] left-0 shadow-md ring-1 ring-${theme}-400 dark:ring-gray-400 transition-all dark:bg-gray-800`}
        ></span>
      </div>
    </div>
  );
}
