import React, { FunctionComponent } from "react";
import { Field } from "formik";

type Props = {
  id?: number;
  errors?: any;
  touched?: any;
  type?: string;
  name?: string;
  labelText?: string;
  placeholder?: string;
};

{
  /* <div className="w-full">
    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
    <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Product brand" required />
</div> */
}

const FormFieldText: FunctionComponent<Props> = (props) => {
  const error =
    props.errors != undefined &&
    props.errors.charAt(0).toUpperCase() + props.errors.slice(1);
  return (
    <React.Fragment>
      <div className="w-full">
        <label
          htmlFor={props.name}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {props.labelText}
        </label>
        <Field
          id={props.id}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className={`bg-gray-50 border ${props.errors ? "border-red-300" : "border-gray-300"} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
          // required
        />
        <p style={{ color: "red", fontSize: "small" }}>{error}</p>
      </div>
    </React.Fragment>
  );
};

export default FormFieldText;
