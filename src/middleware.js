import {
  GET_VIDEO_REQUEST,
  getVideoSuccess,
  getVideoFailure,
  GET_MORE_VIDEO_REQUEST,
  getMoreVideoSuccess,
  getMoreVideoFailure,
} from './actions';

export const videoMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_VIDEO_REQUEST) {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${action.payload}&type=video&key=AIzaSyC7aF8nPIQNa1lS8JyYAxm84YYxoRiHb5w`)
      .then((res) => res.json())
      .then((response) => store.dispatch(getVideoSuccess(response)))
      .catch((error) => store.dispatch(getVideoFailure(error)));
  }
  next(action);
};

export const moreVideoMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_MORE_VIDEO_REQUEST) {
    let { searchApp: { maxResults } } = store.getState();
    const { searchApp: { videoData } } = store.getState();

    if (videoData) {
      if (maxResults === 0) {
        maxResults = 24;
      }
      maxResults += 12;

      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${videoData}&type=video&key=AIzaSyAdI36FRv9uCt9asCKQWFdUrNRHpsxPqkM&maxResults=${maxResults}`)
        .then((res) => res.json())
        .then((response) => store.dispatch(getMoreVideoSuccess(response)))
        .catch((error) => store.dispatch(getMoreVideoFailure(error)));
    }
  }
  next(action);
};
