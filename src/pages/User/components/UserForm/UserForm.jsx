import React, { Component } from 'react';
import { Form, Input, DatePicker, Select, Radio } from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class UserForms extends Component {
  static displayName = 'UserForm';
  constructor(props) {
    super(props);
    this.state = {}
  }

  getState = (state) => {
    return {
      '1': '咸鱼一条',
      '2': '风华浪子',
      '3': '北大才子一枚',
      '4': '百度FE',
      '5': '创业者'
    }[state]
  }

  getInterest = (interest) => {
    return {
      '1': '游泳',
      '2': '打篮球',
      '3': '踢足球',
      '4': '跑步',
      '5': '爬山',
      '6': '骑行',
      '7': '桌球',
      '8': '麦霸'
    }[interest]
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 16 }
    };
    const userInfo = this.props.userInfo || {};
    const type = this.props.type;
    return (
      <Form layout="horizontal">
        <FormItem {...formItemLayout}>
          {
            userInfo && type === 'detail' ? userInfo._id :
              getFieldDecorator('_id', {
                initialValue: userInfo._id
              })(
                <Input type="hidden" />
              )
          }
        </FormItem>
        <FormItem label="用户名" {...formItemLayout}>
          {
            userInfo && type === 'detail' ? userInfo.username :
              getFieldDecorator('username', {
                rules: [{
                  required: true,
                  message: 'Please input your username',
                }],
                initialValue: userInfo.username
              })(
                <Input type="text" placeholder="请输入用户名" />
              )
          }
        </FormItem>
        <FormItem label="性别" {...formItemLayout}>
          {
            userInfo && type === 'detail' ? userInfo.sex === 1 ? '男' : '女' :
              getFieldDecorator('sex', {
                rules: [{
                  required: true,
                  message: 'Please select your sex',
                }],
                initialValue: userInfo.sex
              })(
                <RadioGroup>
                  <Radio value={1}>男</Radio>
                  <Radio value={2}>女</Radio>
                </RadioGroup>
              )}
        </FormItem>
        <FormItem label="状态" {...formItemLayout}>
          {
            userInfo && type === 'detail' ? this.getState(userInfo.state) :
              getFieldDecorator('state', {
                rules: [{
                  required: true,
                  message: 'Please select your state',
                }],
                initialValue: userInfo.state
              })(
                <Select>
                  <Option value={1}>咸鱼一条</Option>
                  <Option value={2}>风华浪子</Option>
                  <Option value={3}>北大才子一枚</Option>
                  <Option value={4}>百度FE</Option>
                  <Option value={5}>创业者</Option>
                </Select>
              )}
        </FormItem>
        <FormItem label="爱好" {...formItemLayout}>
          {
            userInfo && type === 'detail' ? this.getInterest(userInfo.interest) :
              getFieldDecorator('interest', {
                rules: [{
                  required: true,
                  message: 'Please select your interest',
                }],
                initialValue: userInfo.interest
              })(
                <Select>
                  <Option value={1}>游泳</Option>
                  <Option value={2}>打篮球</Option>
                  <Option value={3}>踢足球</Option>
                  <Option value={4}>跑步</Option>
                  <Option value={5}>爬山</Option>
                  <Option value={6}>骑行</Option>
                  <Option value={7}>桌球</Option>
                  <Option value={8}>麦霸</Option>
                </Select>
              )}
        </FormItem>
        {/* <FormItem label="生日" {...formItemLayout}>
          {
            userInfo && type === 'detail' ? userInfo.birthday :
              getFieldDecorator('birthday', {
                rules: [{
                  required: true,
                  message: 'Please select your birthday',
                }],
                initialValue: Moment(userInfo.birthday)
              })(
                <DatePicker />
              )}
        </FormItem> */}
        <FormItem label="联系电话" {...formItemLayout}>
          {
            userInfo && type === 'detail' ? userInfo.phone :
              getFieldDecorator('phone', {
                rules: [{
                  required: true,
                  message: 'Please input your phone',
                }],
                initialValue: userInfo.phone
              })(
                <Input type="text" placeholder="请输入联系电话" />
              )
          }
        </FormItem>
        <FormItem label="联系地址" {...formItemLayout}>
          {
            userInfo && type === 'detail' ? userInfo.address :
              getFieldDecorator('address', {
                rules: [{
                  required: true,
                  message: 'Please input your address',
                }],
                initialValue: userInfo.address
              })(
                <Input.TextArea rows={3} placeholder="请输入联系地址" />
              )}
        </FormItem>
      </Form>
    );
  }
}
const UserForm = Form.create({})(UserForms);

export default UserForm;