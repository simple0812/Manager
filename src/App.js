import React, {
  Component
} from 'react';
import {
  Provider
} from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';
import './utils/axios';
import { Layout, Menu, Row, Col } from 'antd';
import LeftNav from './components/Nav/LeftNav';
import TopNav from './components/Nav/TopNav';
import mockData from './components/Nav/mockData';

import Bundle from './components/Bundle';
import Main from './components/Main';
import Common from './components/Common';
import PageServerError from './components/PageServerError';
import PageNetworkError from './components/PageNetworkError';
import PageNotFound from './components/PageNotFound';
import UpgradeBrowser from './components/UpgradeBrowser';
import CustomSettings from './components/CustomSettings';
import BasicInformation from './components/BasicInformation';
import LoginBox from './components/LoginBox';
import PublicLayout from './components/PublicLayout';
import EmptyLayout from './components/EmptyLayout';
import Workflow from './components/Workflow';

import Async from './containers/Async';
import styles from './components/app.less';

// 定义应用的 Store
import configureStore from './store/configureStore';
import rootSaga from './redux/sagas';

const store = configureStore();
store.runSaga(rootSaga);

function RouteWithLayout({layout, component, ...rest}){
  return (
    <Route {...rest} render={(props) =>
      React.createElement( layout, props, React.createElement(component, props))
    }/>
  );
}


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <RouteWithLayout exact  layout={PublicLayout} path="/" component={Main}/>
            <RouteWithLayout exact  layout={PublicLayout} path="/common" component={Common}/>
            <RouteWithLayout exact  layout={PublicLayout} path="/settings" component={CustomSettings}/>
            <RouteWithLayout exact  layout={PublicLayout} path="/basic" component={BasicInformation}/>
            <RouteWithLayout exact  layout={PublicLayout} path="/workflow" component={Workflow}/>
            
            <RouteWithLayout exact  layout={EmptyLayout} path="/login" component={LoginBox}/>
            <RouteWithLayout exact  layout={EmptyLayout} path="/upgradeBrowser" component={UpgradeBrowser}/>
            <RouteWithLayout exact  layout={EmptyLayout} path="/pageServerError" component={PageServerError}/>
            <RouteWithLayout exact  layout={EmptyLayout} path="/pageNetworkError" component={PageNetworkError}/>

            <Route exact path="/async" render={ (props) => (
              <Bundle load={Async}>
                { (Asyncs) => <Asyncs {...props} />}
              </Bundle>
            ) } />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
          
      </Provider>
    );
  }
}
