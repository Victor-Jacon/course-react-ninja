import { takeLatest, all, call, put, select } from 'redux-saga/effects'
import types from './types';
import {action} from './actions' /* REDUX SAGA 11 - Importo a action que criei na etapa anterior + PETSHOP QUERY 10 */

export function* requestSomeObject(payload) {
  console.log('This is your saga boilerplate')

  /* Put your api reqs here, example:
  const response = yield call(api.get, `/petshop/${payload.id}`)
  const res = response.data; 
  yield put(setPetshop(res.petshop))
  */
}

export default all([
  takeLatest(types.REQUEST_SOME_OBJECT, requestSomeObject),
]);
