// import Link from "next/link";
// import { useTranslations } from "next-intl";

// import FacebookLogo from "../../public/icons/FacebookLogo";
// import InstagramLogo from "../../public/icons/InstagramLogo";
// import Button from "../Buttons/Button";
// import Input from "../Input/Input";
// import styles from "./Footer.module.css";

// export default function Footer() {
//   const t = useTranslations("Navigation");

//   return (
//     <>
//       <div className={styles.footerContainer}>
//         <div className={`app-max-width app-x-padding ${styles.footerContents}`}>
//           <div>
//             <h3 className={styles.footerHead}>{t("company")}</h3>
//             <div className={styles.column}>
//               <a href="example">{t("about_us")}</a>
//               <a href="example">{t("contact_us")}</a>
//               <a href="example">{t("store_location")}</a>
//               <a href="example">{t("careers")}</a>
//             </div>
//           </div>
//           <div>
//             <h3 className={styles.footerHead}>{t("help")}</h3>
//             <div className={styles.column}>
//               <a href="example">{t("order_tracking")}</a>
//               <a href="example">{t("faqs")}</a>
//               <a href="example">{t("privacy_policy")}</a>
//               <a href="example">{t("terms_conditions")}</a>
//             </div>
//           </div>
//           <div>
//             <h3 className={styles.footerHead}>{t("store")}</h3>
//             <div className={styles.column}>
//               <Link href={`/product-category/women`}>{t("women")}</Link>
//               <Link href={`/product-category/men`}>{t("men")}</Link>
//               <Link href={`/product-category/bags`}>{t("bags")}</Link>
//             </div>
//           </div>
//           <div>
//             <h3 className={styles.footerHead}>{t("keep_in_touch")}</h3>
//             <div className={styles.column}>
//               <span>
//                 {t("address.detail")}
//                 <br />
//                 {t("address.road")}
//                 <br />
//                 {t("address.city")}
//               </span>
//               <span>{t("phone_number")}</span>
//               <span>
//                 {t("open_all_days")} <br />- {t("opening_hours")}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col items-center pb-16">
//         <h4 className="text-3xl mb-4">{t("newsletter")}</h4>
//         <span className="px-6 text-center">{t("newsletter_desc")}</span>
//         <div className="mt-5 px-6 flex w-full sm:w-auto flex-col sm:flex-row">
//           <Input
//             label="Newsletter Input Box"
//             name="email"
//             type="email"
//             extraClass=" w-full sm:w-auto"
//           />{" "}
//           <Button
//             size="lg"
//             value={t("send")}
//             extraClass="ml-0 mt-4 sm:mt-0 tracking-widest sm:tracking-normal sm:mt-0 sm:ml-4 w-auto w-full sm:w-auto"
//           />
//         </div>
//       </div>
//       <div className={styles.bottomFooter}>
//         <div className="app-max-width app-x-padding w-full flex justify-between">
//           <span className="">@2022 Haru. {t("all_rights_reserved")}</span>
//           <span className="flex items-center">
//             <span className="hidden sm:block">
//               {t("follow_us_on_social_media")}:
//             </span>{" "}
//             <a
//               href="www.facebook.com"
//               aria-label="Facebook Page for Meow Fashion"
//             >
//               <FacebookLogo />
//             </a>
//             <a
//               href="www.ig.com"
//               aria-label="Instagram Account for Meow Fashion"
//             >
//               <InstagramLogo />
//             </a>
//           </span>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";

const Col = (props: any) => {
  const { title, children } = props;
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="font-bold">{title}</div>
        <div>{children}</div>
      </div>
    </>
  );
};
const Footer: React.FC = () => {
  return (
    <section className="app-max-width mt-16 mb-20 flex flex-col justify-center items-center">
      <div className="grid grid-cols-4 gap-5">
        <Col title="HỆ THỐNG CỬA HÀNG HADES">
          <div className="flex flex-col">
            <div>
              HADES STUDIO FLAGSHIP STORE: 69 QUANG TRUNG STREET, GO VAP
              DISTRICT, HOCHIMINH.
            </div>
            <div>
              Store 2: 26 LY TU TRONG STREET, DISTRICT 1, HOCHIMINH (THE NEW
              PLAYGROUND).
            </div>
            <div>
              Store 3: 350 DIEN BIEN PHU STREET, WARD 7, BINH THANH DISTRICT,
              HOCHIMINH (G-TOWN).
            </div>
            <div>Store 4: 140 NGUYEN HY QUANG, DONG DA DISTRICT, HANOI.</div>
            <div>Store 5: 4 PHAM NGU LAO STREET, DISTRICT 1, HOCHIMINH.</div>
            <div>
              Store 6: 136 NGUYEN HONG DAO STREET, TAN BINH DISTRICT, HOCHIMINH.
            </div>
            <div>Store 7: 56 MAU THAN, NINH KIEU DISTRICT, CANTHO.</div>
          </div>
        </Col>
        <Col title="CHÍNH SÁCH">
          <ul>
            <li>Chính sách sử dụng website</li>
            <li>Phương thức thanh toán</li>
            <li>Chính sách giao nhận - vận chuyển</li>
            <li>Điều khoản dịch vụ</li>
            <li>Hướng dẫn mua hàng</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </Col>
        <Col title="THÔNG TIN LIÊN HỆ">
          <ul>
            <li>CÔNG TY TNHH HADES</li>
            <li>SỐ CSKH: 02873011021 (10h -18h)</li>
            <li>Ngày cấp: 20/07/2020</li>
            <li>Tuyển dụng: hr@hades.vn</li>
            <li>Website: hades.vn</li>
            <li>For business: contact@hades.vn</li>
          </ul>
        </Col>
        <Col title="FOLLOW US ON SOCIAL MEDIA">
          <ul>
            <li>CÔNG TY TNHH HADES</li>
          </ul>
        </Col>
      </div>
    </section>
  );
};

export default Footer;
