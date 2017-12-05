import React, {
  Component
} from 'react';
import {
  Provider
} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import './utils/axios';
import { Layout, Menu } from 'antd';
import LeftNav from './components/Nav/LeftNav';
import TopNav from './components/Nav/TopNav';
import mockData from './components/Nav/mockData';

import Bundle from './components/Bundle';
import Main from './components/Main';
import Common from './components/Common';
import PageServerError from './components/PageServerError';
import PageNetworkError from './components/PageNetworkError';
import PageNotFound from './components/PageNotFound';
import Async from './containers/Async';


// 定义应用的 Store
import configureStore from './store/configureStore';
import rootSaga from './redux/sagas';

const store = configureStore();
store.runSaga(rootSaga);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>

          <div className='layout-container'>
          <LeftNav dataSource={mockData}/>
          <div className='content-container'>
            <TopNav />
            <Router>
              <Switch>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/common" component={Common} />
                  <Route exact path="/async" render={ (props) => (
                    <Bundle load={Async}>
                      { (Asyncs) => <Asyncs {...props} />}
                    </Bundle>
                  ) } />
                  <Route exact path="/pageServerError" component={PageServerError} />
                  <Route exact path="/pageNetworkError" component={PageNetworkError} />
                  <Route component={PageNotFound} />
              </Switch>
          </Router>
          </div>
        </div>
          
      </Provider>
    );
  }
}
