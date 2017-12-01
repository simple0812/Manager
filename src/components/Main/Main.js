import React from 'react';
import PropTypes from 'prop-types';
import './less/main.less';

import { Menu, Icon, Button, Input  } from 'antd';
import LeftNav from '../Nav/LeftNav';
import TopNav from '../Nav/TopNav';
import mockData from '../Nav/mockData';

const Main = (props) => {
  return (
    <div className='layout-container'>
      <LeftNav dataSource={mockData}/>
      <div className='content-container'>
        <TopNav />
        <p>contentxxx</p>
        <p>contentxxx</p>
        <p>contentxxx</p>
        <p>contentxxx</p>
      </div>
    </div>
  );
};

Main.propTypes = {

};

Main.defaultProps = {

};

export default Main;
