import React, {useState, useEffect} from "react";

type Props = {
  variant: string;
  msgText: string;
};

const AlertMessageComponent: React.FC<Props> = (props) => {

  return (
    <div
      className={`flex items-center p-4 m-4 text-sm rounded-lg ${
        props.variant === "success"
          ? "text-green-800 bg-green-50"
          : props.variant === "danger"
          ? "text-red-800 bg-red-50"
          : "text-yellow-800 bg-yellow-50"
      }`}
      role="alert"
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4 mr-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">{props.msgText}</span>!
      </div>
    </div>
  );
};

export default AlertMessageComponent;
