import React from 'react';
import PropTypes from 'prop-types';
import './less/common.less';

import { Card, Table, Row, Col } from 'antd';
import Icon from '../Icon';
import contact from './images/contact.svg';
import birthday from './images/birthday.svg';
import login from './images/login.svg';
import onduty from './images/onduty.svg';
import schedule from './images/schedule.svg';
import Metro from '../Metro';

class Common extends React.Component  {
  constructor(props) {//   构造函数  
    super(props);  
    this.state = {
      todos: [
        {id:1, title:'有任务需要审核', type:'待办提醒', module:'我的绩效', creator:'赵蓉', createdAt:'2017-09-04 10', status:'已读', processStatus:'未处理'},
        {id:2, title:'有任务需要审核', type:'待办提醒', module:'我的绩效', creator:'赵蓉', createdAt:'2017-09-04 10', status:'已读', processStatus:'未处理'},
        {id:3, title:'有任务需要审核', type:'待办提醒', module:'我的绩效', creator:'赵蓉', createdAt:'2017-09-04 10', status:'已读', processStatus:'未处理'},
        {id:4, title:'有任务需要审核', type:'待办提醒', module:'我的绩效', creator:'赵蓉', createdAt:'2017-09-04 10', status:'已读', processStatus:'未处理'},
        {id:5, title:'有任务需要审核', type:'待办提醒', module:'我的绩效', creator:'赵蓉', createdAt:'2017-09-04 10', status:'已读', processStatus:'未处理'},
        {id:6, title:'有任务需要审核', type:'待办提醒', module:'我的绩效', creator:'赵蓉', createdAt:'2017-09-04 10', status:'已读', processStatus:'未处理'},
      ],
      attendances: [
        {id:1, title:'超级管理员', startTime:'2017-10-10 09：34：34', late:'星期天'},
        {id:2, title:'超级管理员', startTime:'2017-10-10 09：34：34', late:'星期天'},
        {id:3, title:'超级管理员', startTime:'2017-10-10 09：34：34', late:'星期天'},
        {id:4, title:'超级管理员', startTime:'2017-10-10 09：34：34', late:'星期天'},
        {id:5, title:'超级管理员', startTime:'2017-10-10 09：34：34', late:'星期天'},
        {id:6, title:'超级管理员', startTime:'2017-10-10 09：34：34', late:'星期天'},
      ]
    }
    this.columns = [  
      { title: '主题', dataIndex: 'title', key: 'title' ,width:'30%'},  
      { title: '消息类型', dataIndex: 'type', key: 'type' ,width:'10%'},  
      { title: '模块', dataIndex: 'module', key: 'module' ,width:'10%'},  
      { title: '创建人', dataIndex: 'creator', key: 'creator' ,width:'10%'},  
      { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt' ,width:'20%'},  
      { title: '状态', dataIndex: 'status', key: 'status' ,width:'10%'},  
      { title: '处理状态', dataIndex: 'processStatus', key: 'processStatus' ,width:'10%'},  
    ]; 
    this.attendanceColumns = [
      { title: '主题', dataIndex: 'title', key: 'title' ,width:'30%'},  
      { title: '开始时间', dataIndex: 'startTime', key: 'startTime' ,width:'50%'},  
      { title: '迟到', dataIndex: 'late', key: 'late' ,width:'20%'}, 
    ]

  }
  render() {
    return (
      <div className='main-container'>
      <Row>
        <Col span={6}>
          <Card style={{height:600}} className='notification-box' title={<b style={{fontSize:12, color:'#525252'}}>通知公告</b>} 
            extra={<a href="#" style={{ color: '#525252' }}>更多</a>} >
            <ul className='notification-content'>
              <li  className='clearx'>
                <span className='notification-date'>2017-07.20</span>
                <div className='notification-bg'>
                  <span className='notification-line'></span>
                  <span className='notification-dot over'></span>
                </div>
                <div className='notification-info'>
                  <a>
                    行政办公-工作流程-公共信息公共信息公共信息
                  </a>
                  <i className='newicon'></i>
                </div>
                <div className='clearx'></div>
              </li>
              <li  className='clearx'>
                <span className='notification-date'>2017-07.20</span>
                <div className='notification-bg'>
                  <span className='notification-line'></span>
                  <span className='notification-dot over'></span>
                </div>
                <div className='notification-info'>
                  <a>行政办公-工作流程
                  </a>
                  <i className='newicon'></i>
                </div>
                <div className='clearx'></div>
              </li>
              <li  className='clearx'>
                <span className='notification-date'>2017-07.20</span>
                <div className='notification-bg'>
                  <span className='notification-line'></span>
                  <span className='notification-dot'></span>
                </div>
                <div className='notification-info'>
                  <a>行政办公-工作流程
                  </a>
                </div>
                <div className='clearx'></div>
              </li>
              <li  className='clearx'>
                <span className='notification-date'>2017-07.20</span>
                <div className='notification-bg'>
                  <span className='notification-line'></span>
                  <span className='notification-dot'></span>
                </div>
                <div className='notification-info'>
                  <a>行政办公-工作流程
                  </a>
                </div>
                <div className='clearx'></div>
              </li>
              <li  className='clearx'>
                <span className='notification-date'>2017-07.20</span>
                <div className='notification-bg'>
                  <span className='notification-dot'></span>
                </div>
                <div className='notification-info'>
                  <a>行政办公-工作流程
                  </a>
                </div>
                <div className='clearx'></div>
              </li>
            </ul>
          </Card>
        </Col>
        
        <Col span={6}>
          <Card style={{height:600}} className='birthday-box' title={<b style={{fontSize:12, color:'#525252'}}>本月寿星</b>} 
            extra={<a href="#" style={{ color: '#525252' }}>更多</a>}>
            <ul className='birthday-content'>
              <li className='birthday-content-item'>
                <p className='birthday-department'>所属部门：电商客服部</p>
                <ul>
                  <li className='birthday-person'>
                    <div></div>
                    <p>韩梅梅</p>
                    <p>10-09</p>
                  </li>
                  <li className='birthday-person'>
                    <div></div>
                    <p>韩梅梅</p>
                    <p>10-09</p>
                  </li>
                  <li className='birthday-person'>
                    <div></div>
                    <p>韩梅梅</p>
                    <p>10-09</p>
                  </li>
                  <li className='birthday-person'>
                    <div></div>
                    <p>韩梅梅</p>
                    <p>10-09</p>
                  </li>
                </ul>
              </li>
              <li className='birthday-content-item'>
                <p className='birthday-department'>所属部门：电商客服部</p>
                <ul>
                  <li className='birthday-person'>
                    <div></div>
                    <p>韩梅梅</p>
                    <p>10-09</p>
                  </li>
                  <li className='birthday-person'>
                    <div></div>
                    <p>韩梅梅</p>
                    <p>10-09</p>
                  </li>
                  <li className='birthday-person'>
                    <div></div>
                    <p>韩梅梅</p>
                    <p>10-09</p>
                  </li>
                  <li className='birthday-person'>
                    <div></div>
                    <p>韩梅梅</p>
                    <p>10-09</p>
                  </li>
                </ul>
              </li>
              <li className='birthday-content-item'>
                <p className='birthday-department'>所属部门：电商客服部</p>
                <ul>
                  <li className='birthday-person'>
                    <div></div>
                    <p>韩梅梅</p>
                    <p>10-09</p>
                  </li>
                  <li className='birthday-person'>
                    <div></div>
                    <p>韩梅梅</p>
                    <p>10-09</p>
                  </li>
                  <li className='birthday-person'>
                    <div></div>
                    <p>韩梅梅</p>
                    <p>10-09</p>
                  </li>
                  <li className='birthday-person'>
                    <div></div>
                    <p>韩梅梅</p>
                    <p>10-09</p>
                  </li>
                </ul>
              </li>
            </ul>
          </Card>
        </Col>

        <Col span={12}>
          <Card className='todo-box' style={{height:600}} title={<b style={{fontSize:12, color:'#525252'}}>待办事项</b>}>
            <Table columns={this.columns} 
              rowKey = {(record) => record.id} 
              dataSource={this.state.todos}  
              className="table" 
              pagination={false}
              />  
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Card className='login-info-box' style={{height:365}}  title={<b style={{fontSize:12, color:'#525252'}}>登录信息</b>} 
            extra={<a href="#" style={{ color: '#525252' }}>更多</a>}>
            <ul className='login-info-content'>
              <li>
                <span className='login-info-icon'>
                  <span className='login-info-dot'></span>
                </span>
                <span className='login-info-name'>韩梅梅</span>
                <span className='login-info-date'>2017-07-20 09:34:34</span>
                <span className='login-info-addr'>湖北省武汉市</span>
              </li>
              <li>
                <span className='login-info-icon'>
                  <span className='login-info-dot'></span>
                </span>
                <span className='login-info-name'>韩梅梅</span>
                <span className='login-info-date'>2017-07-20 09:34:34</span>
                <span className='login-info-addr'>湖北省武汉市</span>
              </li>
              <li>
                <span className='login-info-icon'>
                  <span className='login-info-dot'></span>
                </span>
                <span className='login-info-name'>韩梅梅</span>
                <span className='login-info-date'>2017-07-20 09:34:34</span>
                <span className='login-info-addr'>湖北省武汉市</span>
              </li>
              <li>
                <span className='login-info-icon'>
                  <span className='login-info-dot'></span>
                </span>
                <span className='login-info-name'>韩梅梅</span>
                <span className='login-info-date'>2017-07-20 09:34:34</span>
                <span className='login-info-addr'>湖北省武汉市</span>
              </li>
            </ul>
          </Card>
        </Col>
        <Col span={6}>
          <Card className='attendance-box' style={{height:365}}  title={<b style={{fontSize:12, color:'#525252'}}>排班考勤</b>}>
            <Table columns={this.attendanceColumns} 
              rowKey = {(record) => record.id} 
              dataSource={this.state.attendances}  
              className="table" 
              pagination={false}
              />  
          </Card>
        </Col>
        <Col span={6}>
          <Card className='login-info-box' style={{height:365}} title={<b style={{fontSize:12, color:'#525252'}}>登录信息</b>} 
            extra={<a href="#" style={{ color: '#525252' }}>更多</a>}>
            <ul className='login-info-content'>
              <li>
                <span className='login-info-icon'>
                  <span className='login-info-dot'></span>
                </span>
                <span className='login-info-name'>韩梅梅</span>
                <span className='login-info-date'>2017-07-20 09:34:34</span>
                <span className='login-info-addr'>湖北省武汉市</span>
              </li>
              <li>
                <span className='login-info-icon'>
                  <span className='login-info-dot'></span>
                </span>
                <span className='login-info-name'>韩梅梅</span>
                <span className='login-info-date'>2017-07-20 09:34:34</span>
                <span className='login-info-addr'>湖北省武汉市</span>
              </li>
              <li>
                <span className='login-info-icon'>
                  <span className='login-info-dot'></span>
                </span>
                <span className='login-info-name'>韩梅梅</span>
                <span className='login-info-date'>2017-07-20 09:34:34</span>
                <span className='login-info-addr'>湖北省武汉市</span>
              </li>
              <li>
                <span className='login-info-icon'>
                  <span className='login-info-dot'></span>
                </span>
                <span className='login-info-name'>韩梅梅</span>
                <span className='login-info-date'>2017-07-20 09:34:34</span>
                <span className='login-info-addr'>湖北省武汉市</span>
              </li>
            </ul>
          </Card>
        </Col>
        <Col span={6}>
          <Card className='attendance-box' style={{height:365}} title={<b style={{fontSize:12, color:'#525252'}}>排班考勤</b>}>
            <Table columns={this.attendanceColumns} 
              rowKey = {(record) => record.id} 
              dataSource={this.state.attendances}  
              className="table" 
              pagination={false}
              />  
          </Card>
        </Col>
      </Row>
     
      
      

        


      </div>
    );
  }
  
};

Common.propTypes = {

};

Common.defaultProps = {

};

export default Common;
