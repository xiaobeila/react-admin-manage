import React, { Component } from 'react';
import BreadcrumbCustom from '../../common/BreadcrumbCustom';
import { Row } from 'antd';
import './Home.less';
import emptyGif from '../../assets/image/emptyGif.gif';

export default class MIndex extends Component {
  render () {
    return (
      <div>
        <BreadcrumbCustom paths={['首页']} />
        <div className='mindex'>
          <Row gutter={24}>
            <div>
              <img src={emptyGif} alt="" className='emptyGif' />
            </div>
          </Row>
        </div>
      </div >
    )
  }
}
