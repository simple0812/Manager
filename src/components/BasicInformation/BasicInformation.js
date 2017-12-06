import React from 'react';
import PropTypes from 'prop-types';
import './less/basicInformation.less';

import { Card } from 'antd';

class BasicInformation extends React.Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className='basic-information-nav'>
          <p className='active'>基本信息</p>
          <p>联系方式</p>
          <p>我的头像</p>
          <p>修改密码</p>
          <hr />
          <p>系统日志</p>
        </div>

        <Card className='basic-information-content' title={<b style={{fontSize:12, color:'#525252'}}>基本信息</b>}>
          <p><span>账号</span><span>abcdef</span></p>
          <p><span>工号</span><span>abcdef</span></p>
          <p><span>姓名</span><span>abcdef</span></p>
          <p><span>性别</span><span>abcdef</span></p>
          <p><span>公司</span><span>abcdef</span></p>
          <p><span>部门</span><span>abcdef</span></p>
          <p><span>主管</span><span>abcdef</span></p>
          <p><span>岗位</span><span>abcdef</span></p>
          <p><span>职位</span><span>abcdef</span></p>
          <p><span>角色</span><span>abcdef</span></p>
          <p><span>自我介绍</span><span>abcdef</span></p>
        </Card>
      </div>
    );
  }
}

export default BasicInformation;
