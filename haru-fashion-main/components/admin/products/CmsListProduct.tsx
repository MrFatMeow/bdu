import { SearchOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { ColumnType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
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
    { title: "ID", dataIndex: "id", key: "id" },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    { title: "Giá", dataIndex: "price", key: "price" },
    {
      title: "Phần trăm giảm giá",
      dataIndex: "discountPercent",
      key: "discountPercent",
    },
    {
      title: "ID danh mục",
      dataIndex: "category",
      key: "categoryId",
      render: (e: any, record: any) => <>{e?.name ?? record?.categoryId} </>,
    },
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
    { title: "Số đã bán", dataIndex: "stock", key: "stock" },
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
      <Table
        size="small"
        dataSource={products?.data}
        columns={columns as any}
      />
    </div>
  );
};

export default CmsListProduct;
