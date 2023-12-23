import { SearchOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { ColumnType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { useQuery } from "react-query";
import { PublicServices } from "../../../services/public";
import { OrderDetailModal } from "./OrderDetailModal";

const CmsListOrder = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery("cms-orders", () => PublicServices.getOrders({}));

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: any
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex: any): ColumnType<any> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined rev={""} />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined
        rev={""}
        style={{ color: filtered ? "#1677ff" : undefined }}
      />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text: any) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

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
      ...getColumnSearchProps("orderNumber"),
    },
    {
      title: "Customer ID",
      dataIndex: "customer",
      key: "customer",
      render: (e: any) => e.fullname,
    },
    {
      title: "Customer Email",
      dataIndex: "customer",
      key: "customer",
      render: (e: any) => e.email,
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
      render: (e: any) => (
        <>{e === "CASH_ON_DELIVERY" ? "Thanh toán tiền mặt" : e}</>
      ),
    },
    {
      title: "Delivery Type",
      dataIndex: "deliveryType",
      key: "deliveryType",
      render: (e: any) => <>{e === "STORE_PICKUP" ? "Tại cửa hàng" : e}</>,
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
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
        <OrderDetailModal
          selectedOrder={selectedOrder}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      )}
    </div>
  );
};

export default CmsListOrder;
