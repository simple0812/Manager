import ReduxReqs from 'redux-reqs';
import { beginTask, endTask } from 'redux-nprogress';
import { all,takeLatest,put } from 'redux-saga/effects';
import { watchSagas as asyncSagas } from './async';
import { watchSagas as leftNavSagas } from './leftNav';


ReduxReqs.defaults = {
  beforeAction: beginTask(),
  afterAction: endTask(),
};

console.log('ab', asyncSagas[0])
export default function* rootSaga() {
  yield all([
    ...asyncSagas,
    ...leftNavSagas,
  ]);
}
