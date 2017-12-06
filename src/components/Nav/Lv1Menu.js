import React, { Component } from 'react'
import { Menu, Icon, Button, Input,Tooltip  } from 'antd';
import { browserHistory } from 'react-router';

import styles from './less/LeftNav.less';

import {
  Link
} from 'react-router-dom'

export default class Lv1Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  componentWillMount(){
    
  }

  openChange(evt) {
  	console.log(evt)
  }

  togglelv1Menu() {
    console.log(this.state.active)
    this.setState({
      active: !this.state.active
    });
  }

 initMenu(navItems, parentMenuId) {
    var _this = this;
    var lv2Menus = navItems.filter( each => each.ParentId ==parentMenuId );
    return lv2Menus.map((o, i) => {
      return <li key={o.AppId} className={this.props.selectedLv2Menu.AppId == o.AppId ? 'submenu-item active' : 'submenu-item'}
       onClick={_this.props.onOpenlv3Menu.bind(null, o)}>
        <span>{o.FullName}</span>
      </li>
    })
  }

  render() {
    return (
      <li className={ this.state.active ? 'menu-item active': 'menu-item' }>
        <Tooltip placement="right" title={this.props.parentMenu.FullName}>
          <span className={ this.props.collapsed ? 'menu-item__header-collapsed': 'menu-item__header' }
            onClick={this.togglelv1Menu.bind(this)}>
            <Icon type={this.props.parentMenu.Icon} />
            <strong>{this.props.parentMenu.FullName}</strong>
            <Icon type={this.state.active ? 'down': 'right' } className='menu-item__header-icon'  style={{marginLeft:50}}/>
          </span>
        </Tooltip>
        <ul className={ this.props.collapsed ? 'submenu-collapsed': 'submenu' }>
          {
            this.initMenu(this.props.dataSource, this.props.parentMenu.AppId)
          }
        </ul>
      </li>
    );
  }
}
