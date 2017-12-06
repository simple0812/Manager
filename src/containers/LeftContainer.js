// import React from 'react';
// import Bundle from '../components/Bundle';
// import Main from 'bundle-loader?name=entry!../components/Main';

// export default (props) => (
//     <Bundle load={Main}>
//         { (Container) => <Container {...props} /> }
//     </Bundle>
// );



import { connect } from 'react-redux';
import Async from '../components/Async';
// import { async } from '../redux/async';
import Immutable from 'immutable';

const mapStateToProps = (state) => {
  return {
    menus: state.leftNav.toJSON()
  }
};

// redux流程发起者
function async() {
  return {
    type: 'ASYNC_REQ_GETMENUS',
    meta:'xx'
  };
}

export default connect(
  mapStateToProps,
  { async }
)(Async);
