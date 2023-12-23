import { Table } from "antd";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { PublicServices } from "../../../services/public";

const CmsListCustomers = () => {
  const router = useRouter();
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery("cms-customers", () => PublicServices.getCustomers({}));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Tên", dataIndex: "fullname", key: "fullname" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Số điện thoại", dataIndex: "phone", key: "phone" },
    {
      title: "Địa chỉ giao hàng",
      dataIndex: "shippingAddress",
      key: "shippingAddress",
    },
  ];

  console.log("products", products)
  return (
    <div className="overflow-x-auto">
      <div className="text-xl font-bold mb-4 flex justify-between items-center">
        Danh sách khách hàng
      </div>
      <Table size="small" dataSource={products?.data} columns={columns} />
    </div>
  );
};

export default CmsListCustomers;
