import React, { Component } from 'react';
import { Card, Button, Table, Divider } from 'antd'
import axios from '../../axios'
import Utils from '../../utils/utils'
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
    axios.ajax({
      url: '/table/list1',
      method: 'get',
      data: {
        params: {
          page: this.state.params.page
        }
      }
    }).then((res) => {
      let _this = this;
      this.setState({
        list: res.result.list.map((item, index) => {
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

  handleOperator (type) {
    console.log(type)
  }

  render () {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'username'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '婚姻',
        dataIndex: 'isMarried',
        render (isMarried) {
          return isMarried === 1 ? '未婚' : '已婚'
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
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '联系地址',
        dataIndex: 'address'
      },
      {
        title: '联系电话',
        dataIndex: 'phone',
        render (key, value) {
          return value.id
        }
      },
      {
        title: '操作',
        key: 'handle',
        render: (text, record) => (
          <span>
            <Button onClick={() => this.handleOperator('edit')}>编辑</Button>
            <Divider type="vertical" />
            <Button>删除</Button>
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
              dataSource={this.state.list}
              pagination={this.state.pagination}
            />
          </Card>
        </div>
      </div >
    );
  }
}
