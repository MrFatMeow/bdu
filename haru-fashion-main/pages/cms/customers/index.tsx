import SimpleAdminLayout from "../../../components/admin/SimpleAdminLayout";
import CmsListCustomers from "../../../components/admin/customers/CmsListCustomers";

const CmsProductList: React.FC<any> = (props: any) => {
  return (
    <>
      <SimpleAdminLayout>
        <CmsListCustomers />
      </SimpleAdminLayout>
    </>
  );
};

export default CmsProductList;
