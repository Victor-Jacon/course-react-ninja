import types from './types';

export function setCounterIncrement(counter) {
  return { type: types.SET_COUNTER_INCREMENT, counter }
}

export function setCounterDecrement(counter) {
  return { type: types.SET_COUNTER_DECREMENT, counter }
}

// Multiplo 2
export function setCounterMultiploIncrement(counterM) {
  return { type: types.SET_COUNTERMULTIPLO_INCREMENT, counterM }
}

// Multiplo-B 2
export function setCounterMultiploDecrement(counterM) {
  return { type: types.SET_COUNTERMULTIPLO_DECREMENT, counterM }
}

export function addCounter(counter) {
  return { type: types.ADD_COUNTER, counter }
}

export function removeCounter(counter) {
  return { type: types.REMOVE_COUNTER, counter }
}


/* Saga actions
Here you can request someone object passing their id as a paramater.
Then you can use this id to send a req to your api, or a third party api
*/
export function requestSomeObject(id) {
  return { type: types.REQUEST_SOME_OBJECT, id }
}