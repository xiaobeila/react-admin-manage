import React, { Component } from 'react';
import BreadcrumbCustom from '../../common/BreadcrumbCustom';
import FormList from './components/FormList';
import './Form.less';

export default class Statcenter extends Component {
  static displayName = 'Form';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="form-page">
        <BreadcrumbCustom paths={['表单']} />
        <FormList />
      </div>
    );
  }
}
