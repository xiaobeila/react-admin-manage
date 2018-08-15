import React, { Component } from 'react';
import { Card, Button, Table, Divider, Modal, message } from 'antd'

import { index, usersStore, usersDelete } from '../../axios/user'
import Utils from '../../utils/utils'
import UserForm from './components/UserForm';
import './User.less';

export default class User extends Component {
  static displayName = 'User';
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      params: {
        page: 1
      }
    };
  }

  componentDidMount () {
    this.requestList()
  }

  requestList = () => {
    index().then((res) => {
      let _this = this;
      this.setState({
        list: res.result.items.map((item, index) => {
          item.key = index
          return item;
        }),
        pagination: Utils.pagination(res, (current) => {
          _this.state.params.page = current;
          _this.requestList();
        })
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  onRowClick = (record, index) => {
    this.setState({
      'userInfo': record
    })
  }

  handleOperator = (type) => {
    if (type === 'create') {
      this.setState({
        title: '创建员工',
        isVisible: true,
        type
      })
    } else if (type === 'edit') {
      this.setState({
        title: '编辑员工',
        isVisible: true,
        type
      })
    } else if (type === 'delete') {
      Modal.confirm({
        title: '提示',
        content: '确定要删除此用户吗？',
        cancelText: '取消',
        okText: '确定',
        onOk: () => {
          usersDelete(this.state.userInfo).then((res) => {
            message.success('删除成功');
            this.requestList()
          }).catch((error) => {
            console.log(error)
          })
        }
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.userForm.props.form.validateFields((err, values) => {
      if (!err) {
        let params = {
          type: this.state.type,
          data: {
            ...this.userForm.props.form.getFieldsValue()
          }
        }

        usersStore(params).then((res) => {
          if (res.status === '200') {
            this.setState({
              isVisible: false
            })
            this.requestList();
          }
        }).catch((error) => {
          console.log(error)
        });
      }
    });
  }

  render () {
    const columns = [
      {
        title: 'id',
        dataIndex: '_id'
      },
      {
        title: '用户名',
        dataIndex: 'username'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          if (sex)
            return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        render (state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子一枚',
            '4': '百度FE',
            '5': '创业者'
          }
          return config[state];
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render (interest) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[interest];
        }
      },
      // {
      //   title: '生日',
      //   dataIndex: 'birthday'
      // },
      {
        title: '联系地址',
        dataIndex: 'address'
      },
      {
        title: '联系电话',
        dataIndex: 'phone',
        render (key, value) {
          return value.phone
        }
      },
      {
        title: '操作',
        key: 'handle',
        render: (text, record) => (
          <span>
            <Button onClick={() => this.handleOperator('edit')}>编辑</Button>
            <Divider type="vertical" />
            <Button onClick={() => this.handleOperator('delete')}>删除</Button>
          </span>
        )
      }
    ]

    return (
      <div className="app-container form-page">
        <Card title="用户管理">
          <Button type="primary" icon="plus" onClick={() => this.handleOperator('create')}>创建用户</Button>
        </Card>
        <div className="content-wrap">
          <Card>
            <Table
              bordered
              columns={columns}
              onRow={(record, index) => ({
                onClick: () => {
                  this.onRowClick(record, index)
                }
              })}
              dataSource={this.state.list}
              pagination={this.state.pagination}
            />
          </Card>
        </div>
        <Modal
          title={this.state.title}
          visible={this.state.isVisible}
          onOk={this.handleSubmit}
          width={800}
          onCancel={() => {
            this.userForm.props.form.resetFields();
            this.setState({
              isVisible: false,
              userInfo: ''
            })
          }}
        >
          <UserForm userInfo={this.state.userInfo} type={this.state.type} wrappedComponentRef={(inst) => this.userForm = inst} />
        </Modal>
      </div >
    );
  }
}
