import { Button, Modal, Table } from "antd";
import { useState } from "react";
import { useQuery } from "react-query";
import { PublicServices } from "../../../services/public";

const CmsListOrder = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery("cms-orders", () => PublicServices.getOrders({}));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  const columns = [
    {
      title: "Order Number",
      dataIndex: "orderNumber",
      key: "orderNumber",
    },
    {
      title: "Customer ID",
      dataIndex: "customerId",
      key: "customerId",
    },
    {
      title: "Shipping Address",
      dataIndex: "shippingAddress",
      key: "shippingAddress",
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
    },
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
    },
    {
      title: "Delivery Type",
      dataIndex: "deliveryType",
      key: "deliveryType",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Delivery Date",
      dataIndex: "deliveryDate",
      key: "deliveryDate",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Button
          onClick={() => {
            setSelectedOrder(record);
            setModalVisible(true);
          }}
        >
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="text-xl font-bold mb-4 flex justify-between items-center">
        Danh sách đơn hàng
      </div>
      <Table size="small" dataSource={products?.data} columns={columns} />
      {selectedOrder && (
        <Modal
          title={`Order Number: ${selectedOrder.orderNumber}`}
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
        >
          <Table
            columns={[
              {
                title: "Order Number",
                dataIndex: "orderNumber",
                key: "orderNumber",
              },
              { title: "Product ID", dataIndex: "productId", key: "productId" },
              { title: "Quantity", dataIndex: "quantity", key: "quantity" },
            ]}
            dataSource={selectedOrder.orders}
            pagination={false}
          />
        </Modal>
      )}
    </div>
  );
};

export default CmsListOrder;
