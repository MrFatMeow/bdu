import { Button, Card, Input, Select, notification } from "antd";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { PublicServices } from "../../../services/public";
import { FormBuilder } from "../../forms";
import { FormBuilderOption } from "../../forms/types";

const categoryOptions = () => {
  let options: any = [];
  for (let i = 1; i < 5; i++) {
    options.push({
      label: "Chuyên mục " + i,
      value: i,
    });
  }
  return options;
};
const AddProductForm = ({ onSubmit }: any) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm();

  const onSave = async (values: any) => {
    const res: any = await PublicServices.saveProduct({
      ...values,
      stock: parseInt(values?.stock),
      price: parseInt(values?.price),
      categoryId: parseInt(values?.categoryId),
      discountPercent: parseInt(values?.discountPercent),
    });

    const { success } = res;
    if (success) {
      router.push("/cms/products");
      notification.success({
        message: "Thêm sản phẩm thành công",
      });
    } else {
      notification.error({
        message: "Có lỗi đã xảy ra",
      });
    }
  };

  // name,
  // price,
  // description,
  // image1,
  // image2,
  // discountPercent,
  // detail,
  // categoryId,
  // stock,

  const generalFormFilter: FormBuilderOption[] = [
    {
      cols: 1,
      items: [
        {
          name: `name`,
          label: "Tên sản phẩm",
          component: Input,
          customProps: {},
        },
      ],
    },
    {
      cols: 1,
      items: [
        {
          name: `price`,
          label: "Giá",
          component: Input,
          customProps: {},
        },
      ],
    },
    {
      cols: 1,
      items: [
        {
          name: `discountPercent`,
          label: "Giảm giá",
          component: Input,
          customProps: {},
        },
      ],
    },
    {
      cols: 2,
      items: [
        {
          name: `image1`,
          label: "Hình ảnh 1",
          component: Input,
          customProps: {},
        },
        {
          name: `image2`,
          label: "Hình ảnh 2",
          component: Input,
          customProps: {},
        },
      ],
    },
    {
      cols: 1,
      items: [
        {
          name: `description`,
          label: "Mô tả",
          component: Input,
          customProps: {},
        },
      ],
    },
    {
      cols: 1,
      items: [
        {
          name: `detail`,
          label: "Chi tiết",
          component: Input,
          customProps: {},
        },
      ],
    },
    {
      cols: 1,
      items: [
        {
          name: `stock`,
          label: "Số lượng",
          component: Input,
          customProps: {},
        },
      ],
    },
    {
      cols: 1,
      items: [
        {
          name: `categoryId`,
          label: "Loại hàng",
          component: Select,
          customProps: {
            options: categoryOptions(),
          },
        },
      ],
    },
  ];

  return (
    <Card title="Add New Product">
      <form onSubmit={handleSubmit(onSave)}>
        <div className="flex flex-col gap-4">
          <FormBuilder
            itemOptions={generalFormFilter}
            control={control}
            errors={errors}
          />
          <div className="flex justify-end items-center gap-4">
            <Button onClick={() => router.push("/cms/products")}>Cancel</Button>
            <Button htmlType="submit" type="primary">
              Add
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddProductForm;
