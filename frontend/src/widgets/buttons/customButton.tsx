import React from "react";

type Props = {
  iconStatus?: boolean;
  icon?: string | undefined;
  btnText?: string | undefined;
  bgColor?: string | undefined;
  bgHover?: string | undefined;
  inlineClasses?: string | undefined;
  type?: "reset" | "submit" | "button" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const CustomButton = ({
  type,
  bgColor,
  bgHover,
  icon = "",
  btnText = "",
  inlineClasses,
  iconStatus = false,
  onClick,
}: Props) => {
  const text = btnText.charAt(0).toUpperCase() + btnText.slice(1);
  return (
    <React.Fragment>
      <button
        type={type}
        onClick={onClick}
        className={`${inlineClasses} bg-${bgColor} hover:bg-${bgHover} ml-auto text-white border-0 py-2 px-6 focus:outline-none rounded transition duration-500 ease-in-out`}
      >
        {iconStatus !== true ? text : <i className={icon}></i>}
      </button>
    </React.Fragment>
  );
};

const ResetButton = (props: Props) => {};

export default CustomButton;
