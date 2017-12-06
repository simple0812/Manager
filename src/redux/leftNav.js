import ReduxReqs from 'redux-reqs';
import axios from 'axios';
import Api from '../configs/api';
import Immutable from 'immutable';
import { all,takeLatest,put } from 'redux-saga/effects';

const initialState = Immutable.fromJS({
  code: 'error',
  message: '',
  data: '',
  status : 0,
});

const reduxReqs = new ReduxReqs({
  prefix: 'LEFTNAV'
});

if (__DEV__) {
  let data = Mock.mock({
    "status": 200,  // 状态码
    "data|0-9": {
      "id": "@guid",
      "name": "@cname",
      "address": "@county(true)",
      "website": "@url",
      "email": "@email"
    },     // 数据内容
    "code": "001",  // 业务返回码
    "message": ""   // 消息文本（有业务返回码时，此字段可不显示）
  });

  console.log('(1) data',data);

  let mock = new MockAdapter(axios);
  // 模拟 200 请求
  mock.onGet(Api.getDatas).reply(data.status, data);
  // 模拟网络错误请求
  // mock.onGet(Api.getData).networkError();
  // 模拟超时请求
  // mock.onGet(Api.getData).timeout();
}

reduxReqs
  .get('LEFTNAV', Api.getData);

/*****************redux start**********************/
function asyncReducer(state = initialState, action={}) {
  console.log('asyncReducer==>', action.type, state, action.meta)
  switch (action.type) {
  case 'ASYNC_GETMENUS_SUCCESS' : return Immutable.fromJS(action.meta);
  case 'ASYNC_GETMENUS_ERROR' : return Immutable.fromJS(action.meta);
  default:
      return state;
  }
}


/*****************redux end**********************/

/*****************saga start**********************/
function* getDataAsync(action) {
  var p = yield axios.get(Api.getData)
  console.log('getDateAsync=>', p)
  if(p.status === 200) {
    yield put({type: 'ASYNC_GETMENUS_SUCCESS', meta:p.date});
  } else {
    yield put({type: 'ASYNC_GETMENUS_ERROR', meta:p.message});
  }
}

function* requestGetMenus(action) {
  console.log('watchSagas===>', action);
  yield getDataAsync(action);//put(deleteWebsitesSuccess(action.ids));
}

/*****************saga end**********************/

export default asyncReducer;
// export default reduxReqs.getReducers();

export const watchSagas = [
  takeLatest('ASYNC_REQ_GETMENUS', requestGetMenus),
];
// export const watchSagas = reduxReqs.getWatchSagas();
