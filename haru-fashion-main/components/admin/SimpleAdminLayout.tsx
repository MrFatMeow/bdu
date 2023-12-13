import { Layout, Menu } from "antd";
import { useRouter } from "next/navigation";

const { Sider } = Layout;

const SimpleAdminLayout = ({ children }: any) => {
  const router = useRouter();
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="bg-gray-800 text-gray-100 w-64 flex flex-col">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider>
            <div className="logo">Logo</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" onClick={() => router.push("/cmsm/products")}>
                Quản lý sản phẩm
              </Menu.Item>
              <Menu.Item key="2" onClick={() => router.push("/cms/customers")}>
                Quản lý khách hàng
              </Menu.Item>
              <Menu.Item key="3" onClick={() => router.push("/cms/orders")}>
                Quản lý đơn hàng
              </Menu.Item>
            </Menu>
          </Sider>
        </Layout>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default SimpleAdminLayout;
