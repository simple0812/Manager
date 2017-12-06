import React from 'react';
import PropTypes from 'prop-types';
import './less/customSettings.less';
import { Card } from 'antd';

import Icon from '../Icon';
import renshixingzheng from './images/renshixingzheng.svg';

class CustomSettings extends React.Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

  }

  render() {
    return (

      <Card className='custom-settings-container' title={<b style={{fontSize:12, color:'#525252'}}>自定义主页</b>}>
        <ul className='custom-settings-content'>
          <li>
            <span className='custom-settings-item'>订制子应用</span>
            <ul>
              
              <li className='settings-item-info'>
               <Icon glyph={renshixingzheng} />
               <p>行政办公</p>
              </li>
              <li className='settings-item-info disabled'>
               <Icon glyph={renshixingzheng} />
               <p>行政办公</p>
              </li>
              <li className='settings-item-info disabled'>
               <Icon glyph={renshixingzheng} />
               <p>行政办公</p>
              </li>
              <li className='settings-item-info disabled'>
               <Icon glyph={renshixingzheng} />
               <p>行政办公</p>
              </li>
              <li className='settings-item-info disabled'>
               <Icon glyph={renshixingzheng} />
               <p>行政办公</p>
              </li>
            </ul>
          </li>
          <li>
            <span className='custom-settings-item'>订制首页</span>
            <ul>
              
              <li className='settings-item-info'>
               <Icon glyph={renshixingzheng} />
               <p>行政办公</p>
              </li>
              <li className='settings-item-info disabled'>
               <Icon glyph={renshixingzheng} />
               <p>行政办公</p>
              </li>
              <li className='settings-item-info disabled'>
               <Icon glyph={renshixingzheng} />
               <p>行政办公</p>
              </li>
              <li className='settings-item-info disabled'>
               <Icon glyph={renshixingzheng} />
               <p>行政办公</p>
              </li>
              <li className='settings-item-info disabled'>
               <Icon glyph={renshixingzheng} />
               <p>行政办公</p>
              </li>
            </ul>
          </li>
        </ul>
      </Card>
    );
  }
}

export default CustomSettings;
