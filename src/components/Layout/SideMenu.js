import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import {Link, useLocation} from 'react-router-dom'
const { Sider } = Layout; 
const SideMenu = () => { 
    const [collapsed, setCollapsed] = useState(false)
    const location = useLocation()
    console.log(location.pathname)
    const onCollapse = collapsed => setCollapsed(collapsed);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={location.pathname} mode="inline">
                <Menu.Item key="/users" icon={<HomeOutlined />} >
                    <span>Usuario</span>
                    <Link to='/users'/>
                </Menu.Item>
                <Menu.Item key="/counter" icon={<HomeOutlined />} >
                    <span>Contador</span>
                    <Link to='/counter'/>
                </Menu.Item>
                <Menu.Item key="/" icon={<HomeOutlined />} >
                    <span>Home</span>
                    <Link to='/'/>
                </Menu.Item>
                <Menu.Item key="/main" icon={<HomeOutlined />} >
                    <span>Main</span>
                    <Link to='/main'/>
                </Menu.Item>
                <Menu.Item key="/about" icon={<HomeOutlined />} >
                    <span>About</span>
                    <Link to='/about'/>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}   

export default SideMenu;
