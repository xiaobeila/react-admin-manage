import React, { Component } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import SiderCustom from '../../common/SiderCustom';
import HeaderCustom from '../../common/HeaderCustom';
import './Layout.less';

const { Content, Footer } = Layout;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {
    collapsed: localStorage.getItem("mspa_SiderCollapsed") === "true",
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    }, function () {
      localStorage.setItem("mspa_SiderCollapsed", this.state.collapsed);
    });
  };

  componentDidMount () {
    //保存Sider收缩
    if (localStorage.getItem("mspa_SiderCollapsed") === null) {
      localStorage.setItem("mspa_SiderCollapsed", false);
    }
  }

  render () {
    const { collapsed } = this.state;
    const { location } = this.props;
    let name;
    if (!localStorage.getItem("mspa_user") === null) {
      return <Redirect to="/login" />
    } else {
      // name = location.state === undefined ? JSON.parse(localStorage.getItem("mspa_user")).username : location.state.username;
      name = 'xiaobeila'
    }

    return (
      <Layout className="ant-layout-has-sider" style={{ height: '100%' }}>
        <SiderCustom collapsed={collapsed} path={location.pathname} />
        <Layout>
          <HeaderCustom collapsed={collapsed} toggle={this.toggle} username={name} />
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              {this.props.children}
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>MSPA ©2017-2018 Created by xiaobeila</Footer>
        </Layout>
      </Layout>
    );
  }
}
