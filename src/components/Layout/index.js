import React from 'react';
import { Layout } from 'antd';
import SideMenu from './SideMenu'

const { Content, Footer } = Layout; 

const AppRoute = ({children}) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu/>
      <Layout className="site-layout">
        <Content style={{ margin: '20px 16px' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Nexthor ©2020 Created by Nestor Fock</Footer>
      </Layout>
    </Layout>
  );
}   

 export default AppRoute;
