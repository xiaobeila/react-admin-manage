import React, { Component } from 'react';
import { Row } from 'antd';
import './Home.less';
import emptyGif from '../../assets/image/emptyGif.gif';

export default class Home extends Component {
  render () {
    return (
      <div className='home-page'>
        <div>
          <Row gutter={24}>
            <img src={emptyGif} alt="" className='emptyGif' />
          </Row>
        </div>
      </div >
    )
  }
}
