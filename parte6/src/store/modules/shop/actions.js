import types from './types';

export function addVideo(video) {
  return { type: types.ADD_VIDEO, video }
}

/* Saga actions
Here you can request someone object passing their id as a paramater.
Then you can use this id to send a req to your api, or a third party api
*/
export function createVideo(video) {
  return { type: types.CREATE_VIDEO, video }
}

export function openForm() {
  return { type: types.OPEN_FORM }
}

export function closeForm() {
  return { type: types.CLOSE_FORM }
}

export function playNewVideo(newVideo) {
  return { type: types.PLAY_NEW_VIDEO, newVideo }
}