import HeaderMobile from "./HeaderMobile";
import FooterMobile from "./FooterMobile";
import PageContent from "routes";
import { Layout } from "antd";

const MobileLayout = () => {
  return (
    <Layout>
      <HeaderMobile />

      <Layout.Content>
        <PageContent />
      </Layout.Content>

      <FooterMobile />
    </Layout>
  );
}

export default MobileLayout;