import { connect } from 'react-redux';
import React, { Component } from 'react'
import { Menu, Icon, Button, Input  } from 'antd';
import { browserHistory } from 'react-router';
import LvlMenu from './Lv1Menu';
import Lv3Menu from './Lv3Menu';

import $ from 'jquery';

const Search = Input.Search;

import styles from './less/LeftNav.less';

const SubMenu = Menu.SubMenu;

function requestGetMenus() {
  return {
    type: 'ASYNC_REQ_GETMENUS',
    meta:'xx'
  };
}

import {
  Link
} from 'react-router-dom'

@connect(
  (state) => {
    return ({
    });
  },
  {requestGetMenus} //调用的时候会触发对应的saga
)  
export default class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultKey:'Websites',
      collapsed: false,
      collapsedlv3: true,
      selectedLv2Menu:{}
    }
  }

  componentDidMount() {
    this.props.requestGetMenus()
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps**************>', nextProps)
  }


  initMenu(navItems) {
    var _this = this;
    var lv1Menus = navItems.filter(each => each.ParentId == 0);
    return lv1Menus.map((o, i) => {
      return <LvlMenu selectedLv2Menu={this.state.selectedLv2Menu} 
      key={o.AppId} 
      parentMenu={o}
      dataSource={navItems} 
      collapsed={_this.state.collapsed} 
      onOpenlv3Menu={_this.openlv3Menu.bind(this)}/>
    })
  }

  menuClick({ item, key, keyPath }) {
  	console.log('onClick', item, key, keyPath)
  }

  menuSelect() {
  	console.log('onSelect')
  }

  toggleCollapsed () {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentWillMount(){
    
  }

  openChange(evt) {
  	console.log(evt)
  }

  openlv3Menu (evt) {
    var lv3Menus = this.props.dataSource.filter(each => each.ParentId == evt.AppId);
    if(lv3Menus.length) {
      this.setState({
        collapsedlv3: false,
        selectedLv2Menu: evt
      });
    } else {
      this.setState({
        collapsedlv3: true,
        selectedLv2Menu: {}
      });
    }
  }

  collapsedlv3Menu() {
    this.setState({
      collapsedlv3: true
    });
  }

  collapsedlv3MenuExist() {
    this.setState({
      collapsedlv3: false
    });
  }

  togglelv1Menu() {
    
  }

  calcWidth() {
    var w = 200;
    if(this.state.collapsed && this.state.collapsedlv3)  {
      w = 50;
    } else if ( this.state.collapsedlv3 && !this.state.collapsed) {
      w = 200;
    } else if ( !this.state.collapsedlv3 &&  this.state.collapsed) {
      w = 250;
    } else {
      w = 400;
    }

    $('.right-container').css('left', w);
    return w;
  }

  calcToggleBtnLeft() {
    if(this.state.collapsed && this.state.collapsedlv3)  {
      return 50;
    } else if ( this.state.collapsedlv3 && !this.state.collapsed) {
      return 200;
    } else if ( !this.state.collapsedlv3 &&  this.state.collapsed) {
      return 250 - 9;
    } else {
      return 400 - 9;
    }
  }

  render() {
    return (
      <div className='menuContainer' style={{ width: this.calcWidth()}}>
        <div className='menu-togglebox' style={{ left: this.state.collapsed ? 50 : 200}}>
          <div onClick={this.toggleCollapsed.bind(this)} >
            <div className={ this.state.collapsed ? 'menuopen':'menucollapse'}></div>
          </div>
        </div>
        <div className='menu' style={{ width: this.state.collapsed ? 50 : 200}}>
          <div style={{ textAlign:'center', width:'100%', marginTop:20, display:this.state.collapsed ? 'none' : 'block'}} >
            <div className='biglogo' ></div>
            <Search
              placeholder="查找菜单"
              className='searchcontainer'
              style={{ width: 180, background:'#1e2a38', margin:'30px 0' }}
              onSearch={value => console.log(value)}
            />
          </div>
          <div style={{ textAlign:'center', width:'100%', marginTop:10,display:this.state.collapsed ? 'block' : 'none'}} >
            <div className='smalllogo' style={{ margin:'auto 10px'}} ></div>
          </div> 
          
          <ul>
            {
              this.initMenu(this.props.dataSource)
            }
          </ul>
        </div>
        <div className='btn-togglecontainer'
          style={{ display: this.state.selectedLv2Menu.AppId ? 'block' : 'none', left: this.calcToggleBtnLeft() }}>
            <div style={{ display: this.state.collapsedlv3?'none':'block'}}
              className='collapsedlv3-button' onClick={this.collapsedlv3Menu.bind(this)}></div>
            <div style={{ display: this.state.collapsedlv3?'block':'none'}}
            className='openlv3-button' onClick={this.collapsedlv3MenuExist.bind(this)}></div>
        </div>
        <Lv3Menu 
          collapsedlv3 ={this.state.collapsedlv3} 
          onCollapsedlv3Menu ={this.collapsedlv3Menu.bind(this)}
          collapsed={this.state.collapsed} 
          parentMenu ={this.state.selectedLv2Menu}
          dataSource={this.props.dataSource}/>
      </div>
    );
  }
}
