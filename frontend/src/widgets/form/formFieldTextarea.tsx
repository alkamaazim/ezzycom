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

const FormFieldTextarea: FunctionComponent<Props> = (props) => {
  // const error =
  //   props.errors != undefined &&
  //   props.errors.charAt(0).toUpperCase() + props.errors.slice(1);
  return (
    <React.Fragment>
      <div className="sm:col-span-2">
        <label
          htmlFor={props.name}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {props.labelText}
        </label>
        <textarea
          id={props.id}
        //   rows="8"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder={props.placeholder}
        ></textarea>
      </div>
    </React.Fragment>
  );
};

export default FormFieldTextarea;
