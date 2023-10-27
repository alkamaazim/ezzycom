import React from "react";
import CustomButton from "../buttons/customButton";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  backLink: string;
  addBtn?: boolean;
};

const PageTitle = ({ title, backLink, addBtn = false }: Props) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-custom-light-purple-color">
          {title}
        </h2>
        <div>
          {addBtn === true && (
            <CustomButton
              btnText="Add Product"
              bgColor="custom-primary-color"
              bgHover="custom-light-purple-color"
              inlineClasses="mb-3 text-sm"
              onClick={() => navigate("/addproduct")}
            />
          )}{" "}
          <CustomButton
            btnText="Back"
            bgColor="custom-primary-color"
            bgHover="custom-light-purple-color"
            inlineClasses="mb-3 text-sm"
            onClick={() => navigate(backLink)}
          />
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default PageTitle;
