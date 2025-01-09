import HeaderDesktop from "./HeaderDesktop";
import FooterDesktop from "./FooterDesktop";
import SiderDesktop from "./SiderDesktop";
import PageContent from "routes";
import { Layout } from "antd";

const DesktopLayout = () => {
  return (
    <Layout>
      <HeaderDesktop />

      <Layout hasSider>
        <SiderDesktop />

        <Layout.Content>
          <PageContent />
        </Layout.Content>
      </Layout>

      <FooterDesktop />
    </Layout>
  );
}

export default DesktopLayout;