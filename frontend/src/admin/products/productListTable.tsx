import { useMemo } from "react";
import { useTable } from "react-table";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { deleteData } from "../../adapters/coreServices";
import CustomButton from "../../widgets/buttons/customButton";
import AlertMessageComponent from "../../widgets/alerts/alert";
import MessageToastifyAlert from "../../widgets/alerts/toastifyAlert";
import { useNavigate } from "react-router-dom";

type Props = {
  setErrorMsgObj: (
    value: React.SetStateAction<{
      msg: string;
      variant: string;
      status: boolean;
    }>
  ) => void;
  apiStatus: string;
  allProducts: any[];
  setRefreshOnDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductListTable = (props: Props) => {
  const navigate = useNavigate();

  const tableColumn = [
    {
      Header: "#",
      Cell: ({ row }: any) => <div>{row.index + 1}</div>,
    },
    {
      Header: "Image",
      Cell: ({ row }: any) => (
        <div className="flex items-center font-medium text-gray-500 whitespace-nowrap">
          <img
            className="w-auto h-8 mr-3"
            src={
              row.original.image !== ""
                ? row.original.image
                : "https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
            }
            alt={row.original.name}
          />
        </div>
      ),
    },
    {
      Header: "Product Name",
      accessor: "name",
    },
    {
      Header: "Category",
      Cell: ({ row }: any) => (
        <span className="bg-custom-light-color p-1 text-primary-800 text-xs font-medium rounded">
          {row.original.category}
        </span>
      ),
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Stock",
      Cell: ({ row }: any) => (
        <div>
          <span
            className={`inline-block w-4 h-4 me-2 rounded-full ${setStockColor(
              row.original.stock
            )}`}
          ></span>
          <span>{row.original.stock}</span>
        </div>
      ),
    },
    {
      Header: "Discount",
      accessor: "discount",
    },
    {
      Header: "Actions",
      Cell: ({ row }: any) => (
        <div>
          <CustomButton
            iconStatus={true}
            bgColor="custom-primary-color"
            icon="fa-solid fa-pen-to-square"
            bgHover="custom-light-purple-color"
            onClick={(e) => onEditHandler(row.original.id)}
          />{" "}
          <CustomButton
            iconStatus={true}
            icon="fa-solid fa-trash"
            bgColor="custom-primary-color"
            bgHover="custom-light-purple-color"
            onClick={(e) => onDeleteHandler(e, row.original.id)}
          />
        </div>
      ),
    },
  ];

  const onDeleteHandler = (event: any, id: number) => {
    if (event.type === "click" && id > 0) {
      const endPoint = `/products/${id}`;
      deleteData(endPoint)
        .then((res: any) => {
          if (res.data !== "" && res.status === 200) {
            toast.success(res.data);
            props.setRefreshOnDelete(true);
          }
        })
        .catch((error: any) => {
          props.setErrorMsgObj({
            msg: error.message,
            variant: "danger",
            status: true,
          });
        });
    }
  };

  //   Edit handler === >>>
  const onEditHandler = (id: number) => {
    navigate(`/addproduct/${id}`);
  };

  const setStockColor = (stock: number) => {
    if (stock > 0 && stock <= 10) {
      return "bg-red-300";
    } else if (stock > 10 && stock <= 30) {
      return "bg-orange-300";
    } else {
      return "bg-green-300";
    }
  };

  const columns = useMemo(() => tableColumn, []);
  const data = useMemo(() => props.allProducts, [props.allProducts]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<any>({
      columns,
      data,
    });

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <MessageToastifyAlert />
      <table
        {...getTableProps}
        className="w-full text-sm text-left text-gray-500"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          {headerGroups.map((headerGroup: any, index: number) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column: any, index: number) => (
                <th
                  {...column.getHeaderProps()}
                  key={index}
                  scope="col"
                  className="px-5 py-3"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps}>
          {rows.map((row: any, index: number) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={index}
                className="bg-white border-b"
              >
                {row.cells.map((cell: any, index: number) => (
                  <td
                    {...cell.getCellProps()}
                    key={index}
                    className="px-4 py-2 font-medium text-gray-500 whitespace-nowrap"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {props.apiStatus === "started" && props.allProducts.length === 0 && (
        <ThreeDots
          height="50"
          width="50"
          radius="9"
          color="#5856d6"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            display: "flex",
            height: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
          // wrapperClassName="text-center"
          visible={true}
        />
      )}
      {props.apiStatus === "finished" && props.allProducts.length === 0 && (
        <AlertMessageComponent msgText="No record found!" variant="warning" />
      )}
    </div>
  );
};

export default ProductListTable;
