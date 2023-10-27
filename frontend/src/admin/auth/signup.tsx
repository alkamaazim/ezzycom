import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormFieldText from "../../widgets/form/formFieldText";
import GoBackButton from "../../widgets/buttons/goBackButton";
import CustomButton from "../../widgets/buttons/customButton";
import FormFieldSelect from "../../widgets/form/formFieldSelect";
import FormFieldTextarea from "../../widgets/form/formFieldTextarea";

type Props = {};

// Formik Yup validation === >>>
const validationSchema = Yup.object({
  email: Yup.string().required("Email is required!"),
  gender: Yup.string().required("Gender is required!"),
  contact: Yup.string().required("Contact is required!"),
  address: Yup.string().required("Address is required!"),
  password: Yup.string().required("Password is required!"),
  username: Yup.string().required("Username is required!"),
  fullname: Yup.string().required("Full name is required!"),
});

const initialValues = {};

const Signup = (props: Props) => {
  return (
    <React.Fragment>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-4xl lg:py-16">
          <div className="flex justify-between items-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              SignUp Here
            </h2>
            <GoBackButton onClick="/admin" btnText="Go back" />
          </div>
          <hr />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, action) => {
              console.log(values);
              // handleFormData(values, action);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mt-5">
                  <FormFieldText
                    type="text"
                    name="fullname"
                    errors={errors}
                    touched={touched}
                    labelText="Full Name"
                    placeholder="Full Name"
                  />
                  <FormFieldText
                    type="text"
                    name="username"
                    errors={errors}
                    touched={touched}
                    labelText="Username"
                    placeholder="Username"
                  />
                  <FormFieldText
                    type="password"
                    name="password"
                    errors={errors}
                    touched={touched}
                    labelText="Password"
                    placeholder="Password"
                  />
                  <FormFieldText
                    type="email"
                    name="email"
                    errors={errors}
                    touched={touched}
                    labelText="Email"
                    placeholder="Email"
                  />
                  <FormFieldText
                    type="number"
                    name="contact"
                    errors={errors}
                    touched={touched}
                    labelText="Contact"
                    placeholder="Contact"
                  />
                  <FormFieldSelect
                    name="gender"
                    errors={errors}
                    touched={touched}
                    labelText="Gender"
                  />
                  <FormFieldTextarea
                    name="address"
                    errors={errors}
                    touched={touched}
                    labelText="Address"
                    placeholder="Your Address Here"
                  />
                </div>
                <div className="mt-5" >
                  <CustomButton
                    btnText="SignUp"
                    bgColor="custom-primary-color"
                    bgHover="custom-light-purple-color"
                    inlineClasses="me-3"
                  />
                  <CustomButton
                  type="reset"
                    btnText="Reset"
                    bgColor="custom-primary-color"
                    bgHover="custom-light-purple-color"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Signup;
