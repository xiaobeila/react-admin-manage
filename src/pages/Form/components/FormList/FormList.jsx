import React, { Component } from 'react';
import { Table, Divider, Button } from 'antd';

export default class FormList extends Component {
  static displayName = 'FormList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button>编辑</Button>
            <Divider type="vertical" />
            <Button>删除</Button>
          </span>
        )
      }
    ];

    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];

    return (
      <div className="form-list">
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
