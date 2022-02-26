import React from "react";
import ToggleMode from "./ToggleMode";

export default function Header({ title, theme, switchTheme, showAlert }) {
  return (
    <header className={`bg-${theme}-700 py-3 dark:bg-gray-800 px-3 md:px-0`}>
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1
          className={`font-bold text-xl text-white font-[Merriweather] tracking-widest`}
        >
          {title}
        </h1>
        <ToggleMode
          theme={theme}
          switchTheme={switchTheme}
          showAlert={showAlert}
        />
      </div>
    </header>
  );
}
