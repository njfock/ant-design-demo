import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import Counter from './Counter'

const { Header, Content, Footer, Sider } = Layout; 

const App = () => {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => setCollapsed(collapsed);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Counter
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Counter/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Nexthor ©2020 Created by Nestor Fock</Footer>
      </Layout>
    </Layout>
  );
}   

 export default App;
