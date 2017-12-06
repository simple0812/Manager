import React, { Component } from 'react'
import { Menu, Icon, Button, Input  } from 'antd';
import { browserHistory } from 'react-router';

import styles from './less/LeftNav.less';

import {
  Link
} from 'react-router-dom'

export default class Lv3Menu extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
      collapsed : true
    }
  }

  componentWillMount(){
    
  }

  toggleMenu() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  initMenu(navItems, parentMenuId) {
    var _this = this;
    if(!navItems) return;
    var lv4Menus = navItems.filter(each => each.ParentId == parentMenuId);
    return lv4Menus.map((o, i) => {
      return <li key={o.AppId} className='v3submenu-item'>
            <span>{o.FullName}</span></li>
    })
  }

  render() {
    return (
      <li key={this.props.parentMenu.AppId} className='v3menu-item'>
        <span className={this.state.collapsed ? 'v3menu-item-header' :'v3menu-item-header active'}  onClick={this.toggleMenu.bind(this)}>
          <strong>{this.props.parentMenu.FullName}</strong>
          <Icon type={this.state.collapsed ? 'right' :'down'} />
        </span>
        <ul style={{display:this.state.collapsed ? 'none' :'block'}}>
          {this.initMenu(this.props.dataSource, this.props.parentMenu.AppId)}
        </ul>
      </li>
    );
  }
}
