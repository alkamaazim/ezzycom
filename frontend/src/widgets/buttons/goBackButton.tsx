import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  onClick: string;
  btnText: string;
};

const GoBackButton = (props: Props) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(props.onClick)}
      className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
    >
      {props.btnText}
    </button>
  );
};

export default GoBackButton;
