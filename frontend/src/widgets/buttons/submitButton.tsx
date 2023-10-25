import React from "react";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  btnText: string | undefined;
};

const SubmitButton = (props: Props) => {
  return (
    <React.Fragment>
      <button
        type={props.type}
        className={`inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center rounded-lg ${
          props.type === "reset"
            ? "text-gray-500 bg-gray-200 focus:ring-4 focus:ring-gray-300 hover:bg-gray-300"
            : "text-white bg-red-700 focus:ring-4 focus:ring-red-200 hover:bg-red-800"
        }`}
      >
        {props.btnText}
      </button>
    </React.Fragment>
  );
};

export default SubmitButton;
