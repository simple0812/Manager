import React from 'react';
import PropTypes from 'prop-types';
import './less/loginBox.less';

import { Tabs, Input, Button } from 'antd';
const TabPane = Tabs.TabPane;

class LoginBox extends React.Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='login-box-container'>
        <div className='login-box'>
          <div className='logo-container'>
            <div className='logo'></div>
            <div className='txtlogo'></div>
          </div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="账号登录" key="1">
                <div className='login-by-password'>
                  <Input placeholder="工号/手机号/邮箱" />
                  <Input placeholder="密码" />
                  <p className='forget-password'>忘记密码</p>
                  <p className='btn-login'>
                    登录
                  </p>
                </div>
            </TabPane>
            <TabPane tab="二维码登录" key="2">
              <div className='login-by-qr'>
                <div className='qr-icon'></div>
                <p>手机扫码，安全登录</p>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <div className='login-box-footer'>
          <p>武汉福禄网络科技有限公司</p>
          <p>Copyright© 2009-2017 武汉福禄网络科技有限公司 all rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default LoginBox;
