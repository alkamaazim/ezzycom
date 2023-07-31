import React from "react";

type Props = {
  btnText?: string;
  bgColor: string;
  bgHover: string;
  inlineClasses: string;
  iconStatus?: boolean;
  icon?: string;
  type?: "reset" | "submit" | "button" | undefined;
  onClick?: () => void;
};

const CustomButton = ({
  type,
  btnText = "",
  bgColor,
  bgHover,
  inlineClasses,
  icon = "",
  iconStatus = false,
  onClick,
}: Props) => {
  const text = btnText.charAt(0).toUpperCase() + btnText.slice(1);
  return (
    <React.Fragment>
      <button
        type={type}
        onClick={onClick}
        className={`${inlineClasses} ml-auto text-white bg-${bgColor} border-0 py-2 px-6 focus:outline-none hover:bg-${bgHover} rounded transition duration-500 ease-in-out`}
      >
        {iconStatus !== true ? text : <i className={icon}></i>}
      </button>
    </React.Fragment>
  );
};

export default CustomButton;
