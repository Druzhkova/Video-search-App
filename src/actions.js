export const GET_VIDEO_REQUEST = 'GET_VIDEO_REQUEST';
export const GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS';
export const GET_VIDEO_FAILURE = 'GET_VIDEO_FAILURE';

export const GET_MORE_VIDEO_REQUEST = 'GET_MORE_VIDEO_REQUEST';
export const GET_MORE_VIDEO_SUCCESS = 'GET_MORE_VIDEO_SUCCESS';
export const GET_MORE_VIDEO_FAILURE = 'GET_MORE_VIDEO_FAILURE';

export const DELETE_VIDEO_DATA = 'DELETE_VIDEO_DATA';

export function getVideoRequest(query) {
  return {
    type: GET_VIDEO_REQUEST,
    payload: query,
  };
}

export function getVideoSuccess(data) {
  return {
    type: GET_VIDEO_SUCCESS,
    payload: data,
  };
}

export function getVideoFailure(error) {
  return {
    type: GET_VIDEO_FAILURE,
    payload: error,
  };
}

export function getMoreVideoRequest() {
  return {
    type: GET_MORE_VIDEO_REQUEST,
  };
}

export function getMoreVideoSuccess(data) {
  return {
    type: GET_MORE_VIDEO_SUCCESS,
    payload: data,
  };
}

export function getMoreVideoFailure(error) {
  return {
    type: GET_MORE_VIDEO_FAILURE,
    payload: error,
  };
}
