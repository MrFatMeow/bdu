import { Button, Table } from "antd";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { PublicServices } from "../../../services/public";

const CmsListProduct = () => {
  const router = useRouter();
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery(
    "products",

    () => PublicServices.getProducts({})
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Giá", dataIndex: "price", key: "price" },
    {
      title: "Phần trăm giảm giá",
      dataIndex: "discountPercent",
      key: "discountPercent",
    },
    { title: "ID danh mục", dataIndex: "categoryId", key: "categoryId" },
    {
      title: "Hình ảnh 1",
      dataIndex: "image1",
      key: "image1",
      render: (text: any) => (
        <img
          src={text}
          alt="Hình ảnh 1"
          style={{ maxWidth: "30px", maxHeight: "30px" }}
        />
      ),
    },
    {
      title: "Hình ảnh 2",
      dataIndex: "image2",
      key: "image2",
      render: (text: any) => (
        <img
          src={text}
          alt="Hình ảnh 2"
          style={{ maxWidth: "30px", maxHeight: "30px" }}
        />
      ),
    },
    { title: "Số lượng tồn kho", dataIndex: "stock", key: "stock" },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="text-xl font-bold mb-4 flex justify-between items-center">
        Product List{" "}
        <Button
          size="small"
          type="primary"
          onClick={() => router.push("/cms/products/add")}
        >
          Thêm sản phẩm
        </Button>
      </div>
      <Table size="small" dataSource={products?.data} columns={columns} />
    </div>
  );
};

export default CmsListProduct;
