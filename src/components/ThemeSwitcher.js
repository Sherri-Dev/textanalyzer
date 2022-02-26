import React, { useState } from "react";

export default function ThemeSwitcher(props) {
  const themes = ["green", "blue", "yellow"];

  window.addEventListener("load", () =>
    document.querySelector(`#${props.theme}`).classList.add("ring-2")
  );
  const capitalize = (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase();
  const handleClick = (e) => {
    const btns = document.querySelectorAll(".theme-btn");
    btns.forEach((btn) => {
      btn.classList.remove("ring-2");
    });
    e.target.classList.add("ring-2");
    props.switchTheme(e.target.id);
    props.showAlert(
      "Success!",
      `${capitalize(e.target.id)} Theme has been Enabled`,
      e.target.id
    );
    saveTheme(e.target.id);
  };
  const saveTheme = (theme) => localStorage.setItem("savedTheme", theme);
  return (
    <div className="flex gap-4">
      {themes.map((item, index) => {
        return (
          <div
            className={` theme-btn w-8 h-8 bg-${item}-700 rounded-full cursor-pointer ring-${item}-400 dark:border-gray-300`}
            id={item}
            title={`Switch to ${item} Theme`}
            onClick={handleClick}
            key={item}
          ></div>
        );
      })}
    </div>
  );
}
