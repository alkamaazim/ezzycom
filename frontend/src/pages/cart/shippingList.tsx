import React from "react";
import CustomButton from "../../widgets/buttons/customButton";

type Props = {};

const ShippingList = (props: Props) => {
  return (
    <React.Fragment>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <tbody>
            {data.map((item, index) => (
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-custom-primary-color whitespace-nowrap"
                >
                  {item.title}
                </th>
                <td className="px-6 py-4 text-custom-light-purple-color">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
            <CustomButton
              btnText="Proceed to pay"
              bgColor="custom-primary-color"
              bgHover="custom-light-purple-color"
              inlineClasses="w-full"
            />
        </table>
      </div>
    </React.Fragment>
  );
};

export default ShippingList;

const data = [
  {
    title: "Products Cost",
    value: "$500.00",
  },
  {
    title: "Shipping Cost",
    value: "$100.00",
  },
  {
    title: "Discount",
    value: "-$100.00",
  },
  {
    title: "Tax",
    value: "$18.00",
  },
  {
    title: "Total Amount",
    value: "$518.00",
  },
];
