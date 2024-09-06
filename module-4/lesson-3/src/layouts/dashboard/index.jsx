import React, { useState , useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  HomeOutlined,
  ProductOutlined
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Dropdown, Flex } from "antd";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Uz, En, Ru } from "../../components/icons/flags";
import { getChangedLanguage ,  changeLanguage , getLanguage} from "../../utils/lang";

const { Header, Sider, Content } = Layout;

export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {token: { colorBgContainer, borderRadiusLG}} = theme.useToken();

  const { t , i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    changeLanguage(lang)
  };

  useEffect(() => {
    const lang = getLanguage();
    i18n.changeLanguage(lang);
  }, []);

  const items = [
    {
      label: (
        <Button type="link" onClick={() => changeLang("uz")}>
          UZ
        </Button>
      ),
      key: "1",
      icon: <Uz />
    },
    {
      label: (
        <Button type="link" onClick={() => changeLang("ru")}>
          RU
        </Button>
      ),
      key: "2",
      icon: <Ru />
    },
    {
      label: (
        <Button type="link" onClick={() => changeLang("en")}>
          EN
        </Button>
      ),
      key: "3",
      icon: <En />
    }
  ];

  

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical cursor-pointer border-b mb-2">
            <div className="p-4 text-white text-2xl">DASHBOARD</div>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: <NavLink to="/">{ t('home') }</NavLink>
              },
              {
                key: "2",
                icon: <UserOutlined />,
                label: <NavLink to="/users">{ t('users') }</NavLink>
              },
              {
                key: "3",
                icon: <ProductOutlined />,
                label: <NavLink to="/products">{t('products')}</NavLink>
              }
            ]}
          />
        </Sider>

        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer
            }}
          >
            <Flex justify="space-between" align="center">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64
                }}
              />

              <Dropdown
                menu={{
                  items
                }}
                placement="bottom"
                arrow
              >
                <Button style={{ marginRight: "20px" }}>
                  { getChangedLanguage() }
                </Button>
              </Dropdown>
            </Flex>
          </Header>

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "100vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <footer className="bg-blue-900">
        <div className="container mx-auto text-center p-4 text-white">
          <p>
            &copy; {new Date().getFullYear()} Copyright:
            <a href="https://github.com/ant-design/ant-design">Ant Design</a>
            by Ant UED.
          </p>
        </div>
      </footer>
    </>
  );
};
