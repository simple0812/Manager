import React, { Component } from 'react'
import { Menu, Icon, Button, Input  } from 'antd';
import { browserHistory } from 'react-router';

import styles from './less/LeftNav.less';
import Lv4Menu from './Lv4Menu';

import {
  Link
} from 'react-router-dom'

export default class Lv3Menu extends Component {
 

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    
  }

  initMenu(navItems, parentMenuId) {
    var _this = this;
    if(!navItems) return;
    var lv3Menus = navItems.filter(each => each.ParentId == parentMenuId);
    return lv3Menus.map((o, i) => {
      return <Lv4Menu key={o.AppId} dataSource={navItems} parentMenu ={o} />
    })
  }

  render() {
    return (
      <div className='v3menucontainer' 
        style={{ display: this.props.collapsedlv3 ? 'none' : 'block', left: this.props.collapsed ? 50 : 200 }}>
          <div style={{width:100, height:60, opcity:0}}></div>
          <div className='v3menu'>
            <div className='v3menu-header'>
              <span >
                <Icon type={this.props.parentMenu.Icon} />
                <strong>{this.props.parentMenu.FullName}</strong>
              </span>
            </div>

            <ul>
              {this.initMenu(this.props.dataSource, this.props.parentMenu.AppId)}
            </ul>
          </div>
        </div>
    );
  }
}
