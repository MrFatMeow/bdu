import SimpleAdminLayout from "../../../components/admin/SimpleAdminLayout";
import CmsListProduct from "../../../components/admin/products/CmsListProduct";

const CmsProductList: React.FC<any> = (props: any) => {
  return (
    <>
      <SimpleAdminLayout>
        <CmsListProduct />
      </SimpleAdminLayout>
    </>
  );
};

export default CmsProductList;
