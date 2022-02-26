import React from "react";

export default function Alert(props) {
  return (
    <div className="h-[3rem] my-4">
      {props.alert && (
        <div
          className={`max-w-4xl p-4 mx-auto text-sm text-${props.alert.theme}-700 bg-${props.alert.theme}-200 rounded-lg dark:bg-gray-800 dark:text-gray-300`}
          role="alert"
        >
          <span className="font-bold">{props.alert.type} </span>
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}
