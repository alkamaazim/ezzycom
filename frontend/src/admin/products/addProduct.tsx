import * as Yup from "yup";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import Sidebar from "../common/sidebar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavigationMenu from "../common/navigation";
import React, { useEffect, useState } from "react";
import PageTitle from "../../widgets/global/pageTitle";
import FormFieldText from "../../widgets/form/formFieldText";
import CustomButton from "../../widgets/buttons/customButton";
import MessageToastifyAlert from "../../widgets/alerts/toastifyAlert";
import { getData, postData, updateData } from "../../adapters/coreServices";

type Props = {};

const validationSchema = Yup.object({
  price: Yup.number().required(),
  stock: Yup.number().required(),
  // image: Yup.string().required(),
  discount: Yup.number().required(),
  name: Yup.string()
    .trim()
    .min(3, "Name must be more than 2 characters.")
    .required(),
  category: Yup.string().trim().required(),
  description: Yup.string().trim().required(),
});

const AddProduct = (props: Props) => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
    discount: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (id !== undefined) {
      const endPoint = `/products/${id}`;
      getData(endPoint).then((res: any) => {
        console.log(res.data.items[0].name);
        setInitialValues((prevValues) => ({
          ...prevValues,
          name: res.data.items[0].name,
          price: res.data.items[0].price,
          stock: res.data.items[0].stock,
          image: res.data.items[0].image,
          discount: res.data.items[0].discount,
          category: res.data.items[0].category,
          description: res.data.items[0].description,
        }));
      });
    }
  }, [id]);

  console.log(initialValues);

  const handleFormData = (values: any, { setSubmitting, resetForm }: any) => {
    let endPoint = `/products`;
    if (id !== undefined) {
      endPoint += `/${id}`;
      updateData(endPoint)
        .then((res: any) => {
          toast.success(res.data);
        })
        .catch((error: any) => {
          toast.error(error.data);
        });
    } else {
      postData(endPoint, values)
        .then((res: any) => {
          toast.success(res.data);
          resetForm();
        })
        .catch((error: any) => {
          toast.error(error.data);
        });
    }
  };

  return (
    <React.Fragment>
      <NavigationMenu />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <PageTitle
          title={id !== undefined ? "Update Product" : "Add Product"}
          backLink="/admindashboard"
        />
        <MessageToastifyAlert />
        <div className="text-end"></div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, action) => {
            handleFormData(values, action);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mt-3">
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
                  errors={errors.category}
                  touched={touched.category}
                  labelText="Product Category"
                  placeholder="Product Category"
                />
                <FormFieldText
                  type="number"
                  name="price"
                  errors={errors.price}
                  touched={touched.price}
                  labelText="Price"
                  placeholder="Price"
                />
                <FormFieldText
                  type="number"
                  name="stock"
                  errors={errors.stock}
                  touched={touched.stock}
                  labelText="Product Stock"
                  placeholder="Product Stock"
                />
                <FormFieldText
                  type="number"
                  name="discount"
                  errors={errors.discount}
                  touched={touched.discount}
                  labelText="Product Discount"
                  placeholder="Product Discount"
                />
                <FormFieldText
                  type="text"
                  name="description"
                  errors={errors.description}
                  touched={touched.description}
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
                  btnText={id !== undefined ? "update" : "Add"}
                  bgColor="custom-primary-color"
                  bgHover="custom-light-purple-color"
                  inlineClasses=""
                />{" "}
                {id === undefined && (
                  <CustomButton
                    type="reset"
                    btnText="Reset"
                    bgColor="custom-primary-color"
                    bgHover="custom-primary-color"
                    inlineClasses=""
                  />
                )}
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </React.Fragment>
  );
};

export default AddProduct;
