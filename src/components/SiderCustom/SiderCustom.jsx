import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import asideMenuConfig from '../../menuConfig';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderCustom extends Component {
    constructor(props) {
        super(props);
        const { collapsed } = props;
        this.state = {
            collapsed: collapsed,
            firstHide: true, //第一次先隐藏暴露的子菜单
            selectedKey: '', //选择的路径
            openKey: '', //打开的路径（选择的上一层）
        }
    }
    componentDidMount () {
        this.setMenuOpen(this.props);
    }
    componentWillReceiveProps (nextProps) {
        this.onCollapse(nextProps.collapsed);
        this.setMenuOpen(nextProps);
    }
    setMenuOpen = props => {
        const { path } = props;
        this.setState({
            openKey: path.substr(0, path.lastIndexOf('/')),
            selectedKey: path
        });
    };
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            firstHide: collapsed,
        });
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
    };
    openMenu = v => {
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };
    render () {
        const { collapsed, firstHide, openKey, selectedKey } = this.state;
        return (
            <Sider trigger={null} collapsed={collapsed}>
                <div className="logo" style={collapsed ? { backgroundSize: '70%' } : { backgroundSize: '30%' }} />
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    onClick={this.menuClick}
                    onOpenChange={this.openMenu}
                    openKeys={firstHide ? null : [openKey]}
                >
                    {asideMenuConfig && asideMenuConfig.length > 0 && asideMenuConfig.map((nav, index) => {
                        if (nav.children && nav.children.length > 0) {
                            return (
                                <SubMenu key={index} title={<span><Icon type={nav.icon} /><span>{nav.name}</span></span>}>
                                    {nav.children.map((item) => {
                                        const linkProps = {};
                                        if (item.newWindow) {
                                            linkProps.to = item.path;
                                            linkProps.target = '_blank';
                                        } else {
                                            linkProps.to = item.path;
                                        }
                                        return (
                                            <Menu.Item key={item.path}>
                                                <Link {...linkProps}>
                                                    <span>{item.name}</span>
                                                </Link>
                                            </Menu.Item>
                                        );
                                    })}
                                </SubMenu>
                            );
                        }
                        const linkProps = {};
                        if (nav.newWindow) {
                            linkProps.to = nav.path;
                            linkProps.target = '_blank';
                        } else {
                            linkProps.to = nav.path;
                        }
                        return (
                            <Menu.Item key={nav.path}>
                                <Link {...linkProps}>
                                    <Icon type={nav.icon} />
                                    <span>{nav.name}</span>
                                </Link>
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </Sider>
        )
    }
}