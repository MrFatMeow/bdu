import { Button, Form, Input, notification } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const { username, password } = values;
      if (username == "admin" && password == "123123") {
        notification.success({
          message: "Đăng nhập thành công",
        });
        router.push("/cms/products");
      } else {
        notification.error({
          message: "Sai thông tin đăng nhập",
        });
      }

      console.log("Đăng nhập thành công!", values);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-red">
      <Form
        name="loginForm"
        className="w-full max-w-xs p-6 bg-white rounded shadow-md"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
        >
          <Input placeholder="Tên đăng nhập" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            loading={loading}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
