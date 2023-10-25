import React, { FunctionComponent } from "react";
import { Field } from "formik";

type Props = {
  id?: string | undefined;
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

const FormFieldSelect: FunctionComponent<Props> = (props) => {
  // const error =
  //   props.errors != undefined &&
  //   props.errors.charAt(0).toUpperCase() + props.errors.slice(1);
  return (
    <React.Fragment>
      <div className="w-full">
        <label
          htmlFor={props.name}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {props.labelText}
        </label>
        <select
          id={props.id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
        >
          <option selected>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    </React.Fragment>
  );
};

export default FormFieldSelect;
