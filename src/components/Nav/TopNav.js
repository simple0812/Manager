import React, { Component } from 'react'
import { Menu, Button } from 'antd';
import { browserHistory } from 'react-router';

import styles from './less/TopNav.less';

import Icon from '../Icon';
import fav from './images/fav.svg';
import hint from './images/hint.svg';
import warning from './images/warning.svg';
import collapseSvg from './images/collapse.svg';

import {
  Link
} from 'react-router-dom'

export default class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
    if(location.hash.length > 2) {
      this.state.defaultKey = location.hash.slice(2);
    } 
  }

  render() {
    return (
      <div className='topnav' >
        <span className='topnav-addr'>武汉</span>
        <span className='topnav-temp'>20℃</span>
        <span className='topnav-date'>星期五</span>
        <span className='topnav-weather'>多云</span>
        <span className='topnav-wind'>北风2级</span>
        <span className='topnav-hint'>
          <Icon glyph={hint} />
          <div className='hint-box'>
            <ul>
              <li><span className='hint-line'></span><span className='hint-dot over'></span><a>行政办公-工作流程-公共信息</a></li>
              <li><span className='hint-line'></span><span className='hint-dot'></span><a>行政办公-工作流程-公共信息</a></li>
              <li><span className='hint-line'></span><span className='hint-dot'></span><a>行政办公-工作流程-公共信息</a></li>
              <li><span className='hint-line'></span><span className='hint-dot'></span><a>行政办公-工作流程-公共信息</a></li>
              <li><span className='hint-line'></span><span className='hint-dot'></span><a>行政办公-工作流程-公共信息</a></li>
              <li><span className='hint-dot'></span><a>行政办公-工作流程-公共信息</a></li>
            </ul>
          </div>
          
        </span>
        <span className='topnav-fav'>
          <Icon glyph={fav} />
        </span>
        <span className='topnav-warning'>
          <Icon glyph={warning} />
        </span>
        <span className='topnav-user'>
          <div className='topnav-userpic'></div>
          <div className='user-box'>
            <ul>
              <li><p className='user-info'>超级玛丽奥</p></li>
              <li><span>自定义主页</span></li>
              <li><span>个人信息</span></li>
              <li><p className='user-logout'>退出</p></li>
            </ul>
          </div>
        </span>
      </div>
    );
  }
}
