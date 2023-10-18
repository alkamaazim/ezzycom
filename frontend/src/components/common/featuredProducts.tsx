import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import getData from "../../adapters/coreServices";

type Props = {};

const FeaturedProducts = (props: Props) => {
  const dummyData = {
    items: [],
  };
  const [allProducts, setAllProducts] = useState(dummyData);

  useEffect(() => {
    let endPoint = "/products";
    getData(endPoint)
      .then((res: any) => {
        if (res.data !== "" && res.status === 200) {
          setAllProducts(res.data);
        }
      })
      .catch((error: any) => {
        alert(error.message);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="bg-white body-font">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {allProducts.items.map((product: any, index: number) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/productinfo/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {/* {product.color} */}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedProducts;
