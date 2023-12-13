import SimpleAdminLayout from "../../../components/admin/SimpleAdminLayout";
import AddProductForm from "../../../components/admin/products/AddProductForm";

const CmsProductList: React.FC<any> = (props: any) => {
  return (
    <>
      <SimpleAdminLayout>
        <AddProductForm />
      </SimpleAdminLayout>
    </>
  );
};

export default CmsProductList;
