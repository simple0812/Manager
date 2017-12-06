import React from 'react';
import PropTypes from 'prop-types';
import './less/workflow.less';
import { Select } from 'antd';
import { Input, Button, Icon, Table } from 'antd';

const Search = Input.Search;
const Option = Select.Option;

class Workflow extends React.Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id:1, title:'有任务需要审核', type:'待办提醒', module:'我的绩效', creator:'赵蓉', createdAt:'2017-09-04 10', status:'已读', processStatus:'未处理'},
        {id:2, title:'有任务需要审核', type:'待办提醒', module:'我的绩效', creator:'赵蓉', createdAt:'2017-09-04 10', status:'已读', processStatus:'未处理'},
        {id:3, title:'有任务需要审核', type:'待办提醒', module:'我的绩效', creator:'赵蓉', createdAt:'2017-09-04 10', status:'已读', processStatus:'未处理'},
        {id:4, title:'有任务需要审核', type:'待办提醒', module:'我的绩效', creator:'赵蓉', createdAt:'2017-09-04 10', status:'已读', processStatus:'未处理'},
        {id:5, title:'有任务需要审核', type:'待办提醒', module:'我的绩效', creator:'赵蓉', createdAt:'2017-09-04 10', status:'已读', processStatus:'未处理'},
        {id:6, title:'有任务需要审核', type:'待办提醒', module:'我的绩效', creator:'赵蓉', createdAt:'2017-09-04 10', status:'已读', processStatus:'未处理'},
      ]
    }

    this.columns = [  
      { title: '主题', dataIndex: 'title', key: 'title' ,width:'30%'},  
      { title: '消息类型', dataIndex: 'type', key: 'type' ,width:'10%'},  
      { title: '模块', dataIndex: 'module', key: 'module' ,width:'10%'},  
      { title: '创建人', dataIndex: 'creator', key: 'creator' ,width:'10%'},  
      { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt' ,width:'20%'},  
      { title: '状态', dataIndex: 'status', key: 'status' ,width:'10%', height:'20', render: (text, record, index)=>(  
        <span style={{color:'#21d063'}}>
          {text}  
        </span>  
      )},  
      { title: '处理状态', dataIndex: 'processStatus', key: 'processStatus' ,width:'10%'},  
    ]; 

  }

  render() {
    return (
      <div className='workflow-container'>
        <div className='workflow-container-header'>
          <div className='workflow-container-search'>
            <Select
              showSearch
              style={{ width: 100 }}
              placeholder="搜索条件"
            >
              <Option value="1">公司名称</Option>
              <Option value="2">中文名称</Option>
              <Option value="3">负责人</Option>
            </Select>
            <Input placeholder="搜索您要查询的关键字" style={{width:150}} />
            <Button type="primary" style={{float:'right', background:'#283444', border:'#283444', borderRadius:3}} >查询</Button>
          </div>
          <div className='workflow-container-cmd'>
              <Button><Icon type= 'link' />刷新</Button>
              <Button><Icon type= 'search' />新增</Button>
              <Button><Icon type= 'edit' />编辑</Button>
              <Button><Icon type= 'delete' />删除</Button>
          </div>
        </div>
        <div className='workflow-container-content'>
            <Table columns={this.columns} 
              rowKey = {(record) => record.id} 
              dataSource={this.state.todos}  
              className="table" 
              pagination={false}
              />  
        </div>
      </div>
    );
  }
}

export default Workflow;
