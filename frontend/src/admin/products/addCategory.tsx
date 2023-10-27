import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Sidebar from "../common/sidebar";
import NavigationMenu from "../common/navigation";
import PageTitle from "../../widgets/global/pageTitle";
import FormFieldText from "../../widgets/form/formFieldText";
import CustomButton from "../../widgets/buttons/customButton";

type Props = {};

const initialValues = {
  category: "",
};

const validationSchema = Yup.object({
  category: Yup.string().trim().required(),
});

const AddCategory = (props: Props) => {
  return (
    <React.Fragment>
      <NavigationMenu />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <PageTitle title="Add Category" backLink="/admindashboard" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, action) => {
            // handleFormData(values, action);
          }}
        >
          {({ errors, touched }) => (
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mt-3">
              <Form>
                <FormFieldText
                  type="text"
                  name="category"
                  errors={errors.category}
                  touched={touched.category}
                  labelText="Category Name"
                  placeholder="Category Name"
                />
                <div className="mt-3">
                  <CustomButton
                    btnText="Add"
                    bgColor="custom-primary-color"
                    bgHover="custom-light-purple-color"
                    inlineClasses=""
                  />{" "}
                  <CustomButton
                    type="reset"
                    btnText="Reset"
                    bgColor="custom-primary-color"
                    bgHover="custom-light-purple-color"
                    inlineClasses=""
                  />
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </main>
    </React.Fragment>
  );
};

export default AddCategory;
