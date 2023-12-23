import { Modal, Table } from "antd";

export const OrderDetailModal = (props: any) => {
  const { selectedOrder, setModalVisible, modalVisible } = props;

  const getTotalPaid = () => {
    let re = 0;
    for (let i = 0; i < selectedOrder.orders.length; i++) {
      const o = selectedOrder.orders[i];
      const total =
        parseFloat(o.product.price) *
        o.quantity *
        ((100 - o.product.discountPercent) / 100);
      re += total;
    }
    return re;
  };
  return (
    <>
      <Modal
        title={`Order Number: ${selectedOrder.orderNumber}`}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        width={"100%"}
        footer={
          <div>
            Tổng thanh toán:{" "}
            <span className="font-bold text-2xl">{getTotalPaid()}</span>{" "}
          </div>
        }
      >
        <Table
          columns={[
            {
              title: "Order Number",
              dataIndex: "orderNumber",
              key: "orderNumber",
            },
            {
              title: "Sản phẩm",
              dataIndex: "product",
              key: "productId",
              render: (e: any) => <>{e?.name}</>,
            },
            {
              title: "Giá",
              dataIndex: "product",
              key: "product",
              render: (e: any) => <>{e?.price}</>,
            },
            {
              title: "Giảm giá",
              dataIndex: "product",
              key: "productId",
              render: (e: any) => <>{e.discountPercent}</>,
            },
            { title: "Số lượng", dataIndex: "quantity", key: "quantity" },
            {
              title: "Tổng tiền",
              dataIndex: "product",
              key: "productId",

              render: (e: any, re: any) => {
                const total =
                  parseFloat(e.price) *
                  re.quantity *
                  ((100 - e.discountPercent) / 100);
                return <>{total}</>;
              },
            },
          ]}
          dataSource={selectedOrder.orders}
          pagination={false}
        />
      </Modal>
    </>
  );
};
