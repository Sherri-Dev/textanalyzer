import React, { useState } from "react";

export default function Text_Form(props) {
  const [text, setText] = useState("");
  const [copyText, setCopyText] = useState("Copy");
  const capitalize = (txt) =>
    txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  const handleClick = (e) => {
    if (e.target.textContent === "UpperCase") {
      setText(text.toUpperCase());
    } else if (e.target.textContent === "LowerCase") {
      setText(text.toLowerCase());
    } else if (e.target.textContent === "Clear All") {
      setText("");
    } else if (e.target.textContent === "Remove Extra Spaces") {
      setText(text.replace(/[  ]+/g, " "));
    } else if (e.target.textContent === "Capitalize") {
      setText(
        text
          .split(/\s+/)
          .map((wrd) => capitalize(wrd))
          .join(" ")
      );
    }
    props.showAlert(
      "Success!",
      `${
        e.target.textContent === "UpperCase"
          ? "Converted to UpperCase"
          : e.target.textContent === "LowerCase"
          ? "Converted to LowerCase"
          : e.target.textContent === "Remove Extra Spaces"
          ? "Exra Spaces removed"
          : e.target.textContent === "Capitalize"
          ? "Text Capitalized"
          : "Text Cleared"
      }`,
      props.theme
    );
  };
  const handleChange = (e) => {
    setText(e.target.value);
    setCopyText("Copy");
  };
  const words = text.length === 0 ? "0" : text.trim().split(/\s+/).length;
  const handleCopy = (e) => {
    e.target.nextElementSibling.select();
    document.execCommand("Copy");
    setCopyText(words !== "0" ? "Text Copied" : "Nothing to Copy");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 dark:bg-gray-800">
      <label
        htmlFor="large-input"
        className={`block mb-4 font-medium text-${props.theme}-900 text-2xl font-[Nunito] dark:text-gray-300`}
      >
        Text Spy - Word Counter, Character Counter, Space Removar, Text Copier
      </label>
      <div
        className={`flex flex-wrap justify-between items-center bg-${props.theme}-700 dark:bg-gray-700 px-2 py-4 rounded text-gray-50 text-lg mt-8`}
      >
        <div>
          <b>{words}</b> Words and <b>{text.length}</b> Characters{" "}
        </div>
        <div
          className={`float-right text-purple-${
            props.theme === "300" ? "800" : "300"
          }`}
        >
          <b>{words * 0.08}</b> minutes to read.
        </div>
      </div>
      <span
        className={`float-right bg-${props.theme}-700 text-white relative top-8 p-1 rounded cursor-copy dark:bg-gray-600 dark:text-green-300`}
        onClick={handleCopy}
      >
        {copyText}
      </span>
      <textarea
        type="text"
        value={text}
        className={`block p-4 w-full h-64 text-gray-900 font-[Lato] bg-gray-50 dark:bg-gray-900  rounded-lg border border-gray-300 dark:border-gray-600 focus:border-0 sm:text-md focus:outline-${props.theme}-700 dark:focus:outline-none dark:focus:outline dark:focus:outline-green-400 mb-2 selection:bg-blue-200 dark:selection:bg-gray-700 dark:text-gray-50`}
        autoFocus
        placeholder="Paste your text or start typing..."
        onChange={handleChange}
      />
      <button
        type="button"
        className={`text-${props.theme}-700 hover:text-white border border-${props.theme}-700 hover:bg-${props.theme}-800 focus:ring-4 focus:ring-${props.theme}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-900 dark:focus:ring-green-900`}
        onClick={handleClick}
        disabled={words === "0"}
      >
        UpperCase
      </button>
      <button
        type="button"
        className={`text-${props.theme}-700 hover:text-white border border-${props.theme}-700 hover:bg-${props.theme}-800 focus:ring-4 focus:ring-${props.theme}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-900 dark:focus:ring-green-900`}
        onClick={handleClick}
        disabled={words === "0"}
      >
        LowerCase
      </button>
      <button
        type="button"
        className={`text-${props.theme}-700 hover:text-white border border-${props.theme}-700 hover:bg-${props.theme}-800 focus:ring-4 focus:ring-${props.theme}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-900 dark:focus:ring-green-900`}
        onClick={handleClick}
        disabled={words === "0"}
      >
        Capitalize
      </button>
      <button
        type="button"
        className={`text-${props.theme}-700 hover:text-white border border-${props.theme}-700 hover:bg-${props.theme}-800 focus:ring-4 focus:ring-${props.theme}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-900 dark:focus:ring-green-900`}
        onClick={handleClick}
        disabled={words === "0"}
      >
        Remove Extra Spaces
      </button>
      <button
        type="button"
        className={`text-${props.theme}-700 hover:text-white border border-${props.theme}-700 hover:bg-${props.theme}-800 focus:ring-4 focus:ring-${props.theme}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-900 dark:focus:ring-green-900`}
        onClick={handleClick}
        disabled={words === "0"}
      >
        Clear All
      </button>
    </div>
  );
}
