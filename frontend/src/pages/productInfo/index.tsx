import { useParams } from "react-router-dom";
import ProductSizeAndColor from "./productSize";
import getData from "../../adapters/coreServices";
import React, { useEffect, useState } from "react";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import SocialLink from "../../components/common/socialLink";
import RatingStars from "../../components/common/ratingStars";
import CustomButton from "../../components/common/customButton";

type Props = {};

const ProductInfo = (props: Props) => {
  const dummyData = {
    items: [],
  };
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(dummyData);

  useEffect(() => {
    let endPoint = `/products/${id}`;
    getData(endPoint)
      .then((res: any) => {
        if (res.data !== "" && res.status === 200) {
          setSingleProduct(res.data);
        }
      })
      .catch((error: any) => {
        window.alert(`No data found! ${error.message}.`);
      });
  }, [id]);

  // custom components === >>>
  const ProductSmallImages = (props: any) => {
    return (
      <React.Fragment>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={props.productImage}
            alt={props.productName}
          />
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Header />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {singleProduct.items.map((product: any, index: number) => (
            <div className="lg:w-4/5 mx-auto flex flex-wrap" key={index}>
              {/* <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            /> */}
              <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    <ProductSmallImages
                      productImage={product.image}
                      productName={product.name}
                    />
                    <ProductSmallImages
                      productImage={product.image}
                      productName={product.name}
                    />
                    <ProductSmallImages
                      productImage={product.image}
                      productName={product.name}
                    />
                    <ProductSmallImages
                      productImage={product.image}
                      productName={product.name}
                    />
                    <ProductSmallImages
                      productImage={product.image}
                      productName={product.name}
                    />
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-custom-light-purple-color tracking-widest">
                  BRAND NAME
                </h2>
                <h1 className="text-custom-primary-color text-3xl title-font font-medium mb-1">
                  The Catcher in the Rye
                </h1>
                <div className="flex mb-4">
                  <RatingStars />
                  <SocialLink />
                </div>
                <p className="leading-relaxed">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric.
                </p>
                <ProductSizeAndColor />
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-custom-light-purple-color">
                    Rs. {product.price}/-
                  </span>
                  <CustomButton
                    btnText="Proceed to pay"
                    bgColor="custom-primary-color"
                    bgHover="custom-light-purple-color"
                    inlineClasses="flex"
                  />
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default ProductInfo;
