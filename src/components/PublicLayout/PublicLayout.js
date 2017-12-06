import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Row, Col } from 'antd';
import LeftNav from '../Nav/LeftNav';
import TopNav from '../Nav/TopNav';
import mockData from '../Nav/mockData';

class PublicLayout extends React.Component {

  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="parent-container">
        <div className="left-container">
          <LeftNav dataSource={mockData}/>
        </div>
        <div className="right-container">
            <TopNav />
             {this.props.children}
        </div>
      </div>
    );
  }
}

export default PublicLayout;
