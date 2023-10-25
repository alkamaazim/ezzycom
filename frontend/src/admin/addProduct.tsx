import React from "react";
import * as Yup from "yup"
import Sidebar from "./sidebar";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import NavigationMenu from "./navigation";
import { postData } from "../adapters/coreServices";
import FormFieldText from "../widgets/form/formFieldText";
import CustomButton from "../components/common/customButton";
import MessageToastifyAlert from "../widgets/alerts/toastifyAlert";
// import PageTitle from "./pageTitle";

type Props = {};

const initialValues = {
  name: "",
  price: "",
  stock: "",
  image: "",
  discount: "",
  category: "",
  description: "",
};

const validationSchema = Yup.object({
  price: Yup.number().required(),
  stock: Yup.number().required(),
  image: Yup.string().required(),
  discount: Yup.number().required(),
  name: Yup.string().trim().min(3, "Name must be more than 2 characters.").required(),
  category: Yup.string().trim().required(),
  description: Yup.string().trim().required(),
})

const AddProduct = (props: Props) => {
  const handleFormData = (values: any, action: any) => {
    let endPoint = "/products";
    postData(endPoint, values)
      .then((res: any) => {
        toast.success(res.data)
      })
      .catch((error: any) => {
        toast.error(error.data)
      });
  };

  return (
    <React.Fragment>
      <NavigationMenu />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        {/* <PageTitle title="Add Product" backLink="/admindashboard" /> */}
        <MessageToastifyAlert />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, action) => {
            // console.log(values);
            handleFormData(values, action);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <FormFieldText
                  type="text"
                  name="name"
                  errors={errors.name}
                  touched={touched.name}
                  labelText="Product Name"
                  placeholder="Product Name"
                />
                <FormFieldText
                  type="text"
                  name="category"
                  // errors={errors}
                  // touched={touched}
                  labelText="Product Category"
                  placeholder="Product Category"
                />
                <FormFieldText
                  type="number"
                  name="price"
                  // errors={errors}
                  // touched={touched}
                  labelText="Price"
                  placeholder="Price"
                />
                <FormFieldText
                  type="number"
                  name="stock"
                  // errors={errors}
                  // touched={touched}
                  labelText="Product Stock"
                  placeholder="Product Stock"
                />
                <FormFieldText
                  type="number"
                  name="discount"
                  // errors={errors}
                  // touched={touched}
                  labelText="Product Discount"
                  placeholder="Product Discount"
                />
                <FormFieldText
                  type="text"
                  name="description"
                  // errors={errors}
                  // touched={touched}
                  labelText="Description"
                  placeholder="Description"
                />
              </div>
              <div className="flex items-center justify-center w-full my-5">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <div className="w-8 h-8 text-gray-500">
                      <i className="fa-solid fa-cloud-arrow-up"></i>
                    </div>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    name="image"
                  />
                </label>
              </div>
              <div>
                <CustomButton
                  type="submit"
                  btnText="Add"
                  bgColor="custom-primary-color"
                  bgHover="custom-light-purple-color"
                  inlineClasses=""
                />{" "}
                <CustomButton
                  type="reset"
                  btnText="Reset"
                  bgColor="custom-primary-color"
                  bgHover="custom-primary-color"
                  inlineClasses=""
                />
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </React.Fragment>
  );
};

export default AddProduct;
