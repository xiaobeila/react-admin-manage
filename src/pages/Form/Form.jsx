import React, { Component } from 'react';
import { Card } from "antd";
import FormList from './components/FormList';
import './Form.less';

export default class Form extends Component {
  static displayName = 'Form';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="app-container form-page">
        <Card title="登录行内表单">
          <FormList />
        </Card>
      </div>
    );
  }
}
