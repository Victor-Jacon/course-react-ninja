import types from './types';

export function addVideo(video) {
  return { type: types.ADD_VIDEO, video }
}

/* Saga actions
Here you can request someone object passing their id as a paramater.
Then you can use this id to send a req to your api, or a third party api
*/
export function requestSomeObject(id) {
  return { type: types.REQUEST_SOME_OBJECT, id }
}