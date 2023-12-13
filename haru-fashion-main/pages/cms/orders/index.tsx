import SimpleAdminLayout from "../../../components/admin/SimpleAdminLayout";
import CmsListOrder from "../../../components/admin/orders/CmsListOrder";

const CmsProductList: React.FC<any> = (props: any) => {
  return (
    <>
      <SimpleAdminLayout>
        <CmsListOrder />
      </SimpleAdminLayout>
    </>
  );
};

export default CmsProductList;
