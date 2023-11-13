import React from "react";
import MensCollectionImg from "../../assets/images/menscollection.jpg";
import womensCollectionImg from "../../assets/images/womenscollection.jpg";
import mensTopWear from "../../assets/images/menstopwear.jpg";
import mensBottomWear from "../../assets/images/mensbottomwear.jpg";

type Props = {};

const Collections = (props: Props) => {
  return (
    <React.Fragment>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Collections
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2 cursor-pointer">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={mensTopWear}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 cursor-pointer">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={mensBottomWear}
                />
              </div>
              <div className="md:p-2 p-1 w-full group relative cursor-pointer">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={MensCollectionImg}
                />
                <div className="overlay absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-500 ease-in-out flex items-center justify-center">
                  <h1 className="text-custom-primary-color text-5xl title-font font-medium">
                    Men's Collections
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full group relative cursor-pointer">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={womensCollectionImg}
                />
                <div className="overlay absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-500 ease-in-out flex items-center justify-center">
                  <h1 className="text-custom-primary-color text-5xl title-font font-medium">
                    Women's Collections
                  </h1>
                </div>
              </div>
              <div className="md:p-2 p-1 w-1/2 cursor-pointer">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 cursor-pointer">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Collections;
