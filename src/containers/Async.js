import { connect } from 'react-redux';
import Async from '../components/Async';
// import { async } from '../redux/async';
import Immutable from 'immutable';

const mapStateToProps = (state) => {
  console.log('(2) state',state.async.toJSON());
  return {
    asyncx: state.async.toJSON()
  }
};

// redux流程发起者
function async() {
  return {
    type: 'ASYNC_ASYNCx',
    meta:'xx'
  };
}

export default connect(
  mapStateToProps,
  { async }
)(Async);
